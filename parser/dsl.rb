class Dsl
	require 'mechanize'
	require 'nokogiri'
	# Class initialization
  def initialize( cfgfile, trace = false, isRun = true )
		@file = cfgfile
		@isTest = trace
		# initialize vars
		#@agent = Mechanize.new
		#@hash = Hash.new
		self.init

		if isRun == true
			self.run
		end
	end

	def init
		@trace = []
		@code = ""
		@forimg = ""
		@isNotError = true

		@hash = Hash.new
		@agent = Mechanize.new
	end

	def run
    begin
			# run reading commands from file
			if @file.match('.rb')
				self.fromFile( @file )
			else
				self.fromString( @file )
			end
		rescue Exception => e
			self.out e.message
		end
	end

	# Config to work as DSL
	def configure &block
		instance_eval &block
	end

	# Get command-description from file
	def fromFile cfgfile
		self.out "from file #{cfgfile}"
		# ran data
		instance_eval File.read( cfgfile), cfgfile
	end

	def fromString cfgfile
		self.out "from string"
		#cfgfile = cfgfile.match(/^.*#/).to_s[0...-1]
	  #f = StringIO.new( cfgfile )
		#instance_eval f.read( cfgfile.length ), cfgfile
		begin
			instance_eval cfgfile
		rescue Exception => e
			self.out e.message
			return
		end
		#yield( cfgfile )
	end

	# allias needs for blocked sites
	def agent_alias value
		self.out "agent_alias #{value}"
		@agent.user_agent_alias = value#'Mac Safari' 
	end

	# open site and download page
	def site value
		self.out "site #{value}"
		begin
			@site = value
			@html = Nokogiri::HTML(@agent.get( @site ).body.to_s )
		rescue Exception => e
			self.out "Error on site #{e.message}"
			@isNotError = false
		end
		self.out "   done"
	end
	
	# Return value of site page 
	# where we are working
	def page
		self.out "page #{@site}"
		return @site
	end

	# parse list using css selectors
	def parse_list( css, &block )
		if @isNotError
			#puts "parse_list"
			# check block
			if block_given?
				# clean @list and make it as array
				@list = []
				#puts "css=#{ css}"
				# parse html-page using css selector
				# make a list of nesessary data
				@html.css( css ).each do |item|
					# @hash we are using as structure
					# write an fields for DB
					@hash = {}
					# check data from css selector
					# if it's not empty parse it
					if !item.to_s.empty?
						# make this as a new html-part
				  	i = Nokogiri::HTML(item.to_s)
						# call block from description file with item as var
						block.call( i )
						# @hash must be filled in block
						if !@hash.empty?
							# if it all rihgt( it has a @hash with new data )
							# add hash to @list
							@list.push( @hash )
						end
					end
				end
	  	# if we dont havee a block
			else
				@list = @html.css( css )
			end
		end
	end
	
	# function(command for DSL) to fill @hash in file descriptor
	def fields( name, value )
		self.out "field #{name} = #{value}"
		@hash[name] = value
	end

	# function(command for DSL) to save images, pages 
	# using HTTP GET from another server
	def save_as( url, dest )
		self.out "save_as"
		to = @code + dest
		self.out "    :#{to}"
		#if !@isTest
			# If file exists - for saving resource of HD
			# we delete it - we don't need copies 
			if File.exist? to
				File.delete to
			end
			# Save as - use HTTP.GET
			@agent.get( url ).save_as to
		#end
		self.out "    #{url} to #{dest}"
	end

	def img dest
		self.out "img"
		to = @forimg + dest
		self.out "    :#{to}"
		return "<img src='#{to}'>"
	end
	# Return @list
	def list
		return @list
	end

	# Return Nokogiri::HTML
	def html
		return @html.to_s
	end

	# Return @hash
	def hash
		return @hash
	end

	# print
	def out src
		if @isTest == true
			#puts "trace = #{src}"
			#str = eval "puts src"
			@trace.push( "trace = #{src}" )
		end
	end

	def getOutput
		@trace
	end
end

#class DSL < ParserDSL
#end
#x = Dsl.new( './test/test.rb' )
#x.output
#x = Dsl.new( './test/irr.rb' )
#puts x.list
#puts x.list.count
#z = DSL.new( "site 'http://www.ya.ru'" )
#z.list
