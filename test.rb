# Не все сайты пускают просто так
agent_alias "Mac Safari"
# Открываем сайт
site "http://www.google.com"
parse_list "//a/text()" do |item| 
		fields :LINKS, item.text()
end
