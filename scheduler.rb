#!/usr/bin/env ruby

require 'rufus-scheduler'
require 'sqlite3'
require 'logger'
require_relative 'db/query'



module Schedule
	# Simple wrapper for rufus-scheduler
	# in my application
  class Scheduler
		
    def initialize
			@scheduler = Rufus::Scheduler.new
			@logger = Logger.new( './log.log' );
			@logger.info( 'initialize' )
		end
   
		def run
			# Load file
			# load File.join( File.dirname(__FILE__), "./dbparser.rb" )
			# Set interval for start
			@logger.info( 'run' )
			@scheduler.interval '20s' do
			#@scheduler.in '10s' do
			#@scheduler.in '5h' do
				begin
					@logger.info "Dir.pwd = #{ Dir.pwd }" 
					@logger.info "Dir.pwd = #{ Dir.pwd }" 
					@logger.info "#{File.join( File.dirname(__FILE__), "./dbparser.rb" ) }"
					load File.join( File.dirname(__FILE__), "./dbparser.rb" )
					# Queries
					query = DB.Query
					q = query[:POINTS_Q]
					SQLite3::Database.new "./de.sqlite3" do |db|
						db.execute( q ) do |data|
						#db.query(q) do |data|
							@logger.info ":0 #{data[0]}"
							@logger.info ":1 #{data[1]}"
							@logger.info ":2 #{data[2]}"
							@logger.info ":3 #{data[3]}"
							@logger.info ":4 #{data[4]}"
							@logger.info ":5 #{data[5]}"
							@logger.info ":6 #{data[6]}"
							@logger.info "#{DB.Query}"
							@logger.info "#{DB.Fields}"
							@logger.info "!!! 1"
				  		txt = data[6]#pts["parser"]
							@logger.info "!!! 2"
				  		name = data[2]#pts["label"]
							@logger.info "!!! 3"
				  		pathdata = "./assets/data/#{data[3]}/"
							@logger.info "!!! 4"
				  		forimg = "/data/#{data[3]}/"
						  @logger.info "start class"	
							RestAPI::DBParser.new( 
								data[0], 
								name, 
								txt, 
								db, 
								DB.Query, 
								DB.Fields, 
								pathdata, 
								forimg, 
								true 
							)
						end
					end
					rescue Exception => e
						@logger.error( "#{e}" )
				end
			end

			@scheduler.join
    end
	end
end

#if Dir.pwd == "/"
#	Dir.chdir "/home/develop/projects/agregator"
#end

s = Schedule::Scheduler.new
s.run

