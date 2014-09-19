require './parser/dsl'

module RestAPI
	class DBParser < Dsl
		def initialize( id, name, src, db, queries, fields, code, forimg, isTest )
			@file = src
			@db = db
			@fields = fields
			@counter = 0
			@query = queries
			@uncorrect = ''
			@name = ''
			@src = id

			self.init
			@isTest = isTest
			@code = code
			@forimg = forimg
			
			# Run parent init
			# super src, isTest, true
			self.toJournal "Service <strong>#{name}</strong> is running"
			self.run
			self.toJournal "Service <strong>#{name}</strong> has finished"
		end
		
		def IsCorrectFields
			self.out "IsCorrectFields"
			if @counter == 0
				@fields.each { |key| 
					if !@hash.has_key?( key )
						@uncorrect = "Field {key} is not exists"
					end
				}
				if @uncorrect.length == 0
					@counter = @counter + 1
				end
			end
			self.out "  #{@uncorrect}"
		end

		def toDB
			self.out "toDB"
			if @uncorrect.length == 0
				self.out "db=#{@db}"
				# Check data - MSGID and Source
				@db.execute( @query[:DATA_Q_CHK], [@hash[:MSGID], @src] ) do |result|
				  if result[0] == 0 	
						# Create DINAMYC SQL QUERY
						ins = "INSERT INTO RADATA ("
						f = ""
						v = ""
						vv = []
						# Set state
						@hash[:STATE] = 1
						# System user
						@hash[:USER] = 1
						# Source
						@hash[:SOURCE] = @src
						# Set User
						# @hash[:USER] = 0
						# Generate SQL INSERT
						# And arraay of values
						counter = 0
		 	  		@hash.each do |key,val|
							if counter == 0
					 			f = f + key.to_s
					 			v = v + "?"
					 			vv.push( val.to_s )
							else
					 			f = f + "," + key.to_s
					 			v = v + ",?"
					 			vv.push( val.to_s )
							end
					 		counter = counter + 1
						end	
						f = f + ") VALUES ("
						v = v + ");"
        		# Finally make string
						ins = ins + f + v
						# Insert to Journal just to look
						toJournal ins
						# Insert into DB
						@db.execute( ins, vv )
						# Insert hash into journal
						toJournal @hash.to_s
					else
						self.out "it exits"
					end
				end
			end
			self.out "   done"
		end

		def toJournal line
				@db.execute( @query[:JOURNAL_I], [line] )
		end

	end
end

#str = "out 'qwe'\n"
#str = str + "site 'http://www.ya.ru'\n"
#str = str + "out '2'\n"

#d = RestAPI::DBParser.new( "./parser/test/test.rb", nil, [], true )
#d = RestAPI::DBParser.new( str, nil, [], true )
#puts " d =  #{ d.getOutput }"
