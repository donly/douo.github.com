# encoding: utf-8

=begin
1. 将 ruhoh posts 的文件复制到 jekyll 的 _drafts 下，
   并运行 convert_post 将标题转换为 jekyll 规范并复制到新目录，然后关闭 jekyll 服务
2. 将 ruhoh notes 的文件复制到 jekyll 的 _notes 下，并在 _config 中配置：
collections:
  notes:
    output: true
    to_tree: true
3. 将 media 负责到 jekyll 根目录下，并运行 convert_media_url
=end

require 'pp'
module Ruhoh
  class Generator < Jekyll::Generator

    MEDIA_URLS_MATCHER = %r(\{\{\s*urls\.media\s*\}\}\/([^ "\)]+))

    def generate(site)
      # convert_post(site)
      convert_media_url(site)
      # convert_notes_index(site)
    end

    # 需要先启用 show_drafts: true
    # 将 ruhoh posts 的文件复制到 jekyll 的 _drafts 下，这个生成器将标题转换为 jekyll 规范并复制到新目录
    def convert_post(site)
      dst = '_posts'
      docs = site.posts.docs
      docs.select{ |d| d.data['draft'] }.each{ |doc|
        # 原来的 drafts 文件还是继续呆在 drafts 目录里
        unless doc.cleaned_relative_path.sub('_drafts','').start_with? "/drafts"
          path = File.dirname(doc.path).gsub('_drafts',dst)
          FileUtils::mkdir_p path
          doc.data.tap{ |data|
            FileUtils::mv(doc.path,
                         File.join(path,data['date']
                                         .strftime("%Y-%m-%d-#{data['slug']}#{data['ext']}")))
          }
        end
      }
    end

    # 将 _post/date-name.md 转为 _res/posts/date-name
    def doc_resource_path(base, doc)
      File.join(base, doc.collection.label, doc.cleaned_relative_path)
    end

    # 移除 ruhoh 的 urls.media 标签
    # 并将文章相关的资源文件移动到 _res 目录相应的文章目录下
    def convert_media_url(site)
      base = site.in_source_dir("_res")
      site.collections.each{ |key,collection|
        # pp collection
        collection.docs.each{ |doc|
          content = File.read(doc.path)
          res_dir = doc_resource_path(base, doc)
          # 移除 mustache 标签 {{urls.media}}
          content.gsub!(MEDIA_URLS_MATCHER) do
            res_file = Regexp.last_match[1]
            ruhoh_media = File.join("media",res_file)
            # pp ruhoh_media
            if(File.exist?(ruhoh_media))
              FileUtils::mkdir_p(File.dirname(File.join(res_dir, res_file)))
              FileUtils::mv(ruhoh_media,File.join(res_dir, res_file))
            end
            res_file
          end
          File.open(doc.path,'w'){ |file| file.write(content)}
        }
      }
    end

    # TODO 将 ruhoh 作为父节点内容的文件转换为子文件，命名为总览等
    # 比如 Android/index.md 或 Android/android.md 
    def convert_notes_index(site)
      site.collections['notes'].files.each do |f|
        pp f.name
      end
    end
  end
end
