agent_alias "Mac Safari"
site "http://rent.azbuka.ru/?SORT=&DESC=&PRMIN=&PRMAX=&CUR=0&ARMIN=&ARMAX=&ROOMS[1]=Y&FLMIN=&FLMAX=#filter"
counter = 0

parse_list 'table>tr' do |i|
  if counter > 0
    id = i.xpath( '//td[@class="photo"]/a/@href' ).to_s.gsub('/','')
    fields :ID, id
	  fields :ROOM, 1
    fields :PRICE, i.xpath( '//td[@class="price"]/a/text()' ).to_s
   
    metro = i.xpath( '//td[@class="metro"]/a/text()').to_s.gsub('(','').gsub(')','')
    if not metro.empty? 
      metro = "; метро: " + metro
    end
    address = i.xpath( '//td[@class="address"]/a/text()').to_s
    city = i.xpath( '//td[@class="city"]/a/text()').to_s

    fields :SUBWAY, city + '; ' + address + metro

    link = "http://rent.azbuka.ru/" + id
    fields :LINK, link
    fields :PAGE, page

    to_next link do |n|
                  
      sq = n.xpath( '//div[@class="detail"]/div[@class="columns"]/div[@class="column attributes"]/div[@class="attribute"][3]/div[@class="body"]/text()' ).to_s
      sq = sq.gsub(/\t/,'')       
      sq = sq.gsub(/\n/,'')      
      sq = sq.gsub( '            ', '')
      sq = sq.gsub( '           ', '')
      sq = sq.gsub( '         ', '' )
            
      fields :SQUARE, sq.to_s
      fields :OTHERS, n.xpath( '//div[@class="detail"]/div[@class="columns"]/div[@class="column attributes"]/div[@class="attribute"][5]/div[@class="body"]/text()' ).to_s
      fields :PHONE, n.xpath( '//div[@class="detail"]/div[@class="columns"]/div[@class="column gallery"]/div[@class="attribute"][1]/b/text()' ).to_s
    end

    out hash
    out ''
  end
  counter = counter + 1
end
