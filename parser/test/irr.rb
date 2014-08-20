# Устанавливаем агента - некоторые сайты имеют блокировки
agent_alias "Mac Safari"
# Открываем сайт
site "http://irr.ru/real-estate/apartments-sale/one-rooms/"
# Парсим
parse_list "div[class='adds_cont clear']>div[class='add_list add_type4 ']" do |i|
  # Находим идентификатор
	id = i.xpath('//div/@data-item-id').to_s
	# Формируем запрос - где лежит номер
  url = "http://monolith1.izrukvruki.ru/phones/ru/#{id}/phone/#{id}.jpg"
	# Куда сохраняем
	dest = "./#{id}.jpg"
	# Сохраняем
	save_as url, dest
	# Так как файл на жестком диске а не в базе
	# формируем tag img
	phone = "<img src='#{dest}>"
	# Заполняем поля структуры
	fields :ID, id
	fields :ROOM, 1
	r = i.xpath( '//div[@class="flat_prop"][1]/div[@class="flat_p"][1]/div[@class="flat_p_txt"]/p/text()').to_s.gsub(/\t\n/,'')
	s = i.xpath( '//div[@class="flat_prop"][1]/div[@class="flat_p"][2]/div[@class="flat_p_txt"]/p/text()').to_s.gsub(/\t\n/,'')
	f = i.xpath( '//div[@class="flat_prop"][1]/div[@class="flat_p"][3]/div[@class="flat_p_txt"]/p/text()').to_s.gsub(/\t\n/,'')
	fs = ''
	if f != '-'
		fs = i.xpath( '//div[@class="flat_prop"][1]/div[@class="flat_p"][3]/div[@class="flat_p_txt"]/p/sub/text()').to_s.gsub(/\t\n/,'')
	end

	fields :SQUARE,	( r+"км.; площадь: " + s + ";  этаж: " + f + fs)
  fields :PRICE, i.xpath( '//div[@class="right_block"]/div[@class="add_cost"]/text()' ).to_s.gsub(/\t/,'')
  fields :PHONE, phone
  address = ""
	address = i.xpath( '//div[@class="main_props"]/div[@class="add_title_wrap"]/a[@class="add_title"]/text()' ).text().gsub(/\n/, ' ') 
  subway = ""
	subway = i.xpath(	'//div[@class="main_props"]/div[@class="placed"]/text()' ).text().gsub(/\n/, ' ' )
	if subway != ""
		address = address + " добраться:" + subway
	end
	fields :SUBWAY, address
  fields :OTHERS, i.xpath( '//div[@class="main_props"]/div[@class="tags"]/span/text()' ).to_s.gsub(/\t/,'')
  fields :LINK, i.xpath( '//div[@class="main_props"]/div[@class="add_title_wrap"]/a[@class="add_title"]/@href' ).text()
	fields :PAGE, page
end
