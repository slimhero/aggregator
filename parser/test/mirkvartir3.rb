agent_alias "Mac Safari"
site "http://arenda.mirkvartir.ru/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0/?roomsFrom=3&roomsTo=3"
parse_list 'div[class="cntr highlight"]' do |i|
  id = i.xpath( '//a[@class="m cmpz-list-item"]/@href' ).to_s.gsub('/','')
  fields :ID, id
	fields :ROOM, 3
  fields :SQUARE, i.xpath( '//p[1]/span/text()' ).to_s.gsub(/\t/,'').gsub(/\r/,'').gsub(/\n/,'')
  fields :PRICE, i.xpath( '//p/strong/text()' ).to_s
  metro = i.xpath( '//span[@class="link-add-desc"]/nobr/text()').to_s.gsub('(','').gsub(')','')
  if not metro.empty? 
    metro = "; метро: " + metro
  end
  fields :SUBWAY, i.xpath( '//span[@class="address link"]/text()' ).to_s + metro
  link = "http://arenda.mirkvartir.ru/" + id
  fields :LINK, link
  fields :PAGE, page
    
  to_next link do |n|
    fields :OTHERS, n.xpath( '//div[@class="estate-card-item"]/p[@class="estate-description"]/text()' ).to_s
    fields :PHONE, n.xpath( '//span[@class="phone-item"][1]/text()' ).to_s
  end
  #toDB
end
