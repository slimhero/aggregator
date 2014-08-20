site "http://www.cian.ru/cat.php?deal_type=2&obl_id=1&room1=1"
parse_list "table[class='cat'] > tr.cat" do |i|
	fields :ID, i.xpath('//tr[@class="cat"]/@id').text().gsub(/tr_/,'')
 	fields :ROOM, 1
	square = ""
	i.xpath('//td[contains(@id,"room")]/descendant::text()').each do |item|
		square = square + item.text().strip + " "
	end	
	fields :SQUARE,  square 
	fields :PRICE, i.xpath('//td[contains(@id,"price")]/b/text()').text 
  fields :PHONE, i.xpath('//td[contains(@id,"contacts")]/div/a[@class="n"]/text()').text() 
	subway = ""
	i.xpath('//td[contains(@id,"metro")]/descendant::text()').each do |item|
		subway = subway + item.text().strip + " "
	end
	fields :SUBWAY, subway.strip
	fields :OTHERS, i.xpath( '//td[contains(@id,"floor")]|//td[contains(@id,"dopsved")]' ).text()
	fields :LINK, ""
	fields :PAGE, page 
end
