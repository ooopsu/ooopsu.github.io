# 외부 링크를 자동으로 새 탭에서 열기
Jekyll::Hooks.register [:pages, :posts, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html"

  site_url = doc.site.config['url'] || ''

  doc.output = doc.output.gsub(/<a\s+([^>]*?)href\s*=\s*"(https?:\/\/[^"]*)"([^>]*?)>/mi) do
    pre_attrs = $1
    url = $2
    post_attrs = $3
    full_attrs = pre_attrs + post_attrs

    if url.start_with?(site_url) || full_attrs.include?('target=')
      $&
    else
      "<a #{pre_attrs}href=\"#{url}\" target=\"_blank\" rel=\"noopener noreferrer\"#{post_attrs}>"
    end
  end
end
