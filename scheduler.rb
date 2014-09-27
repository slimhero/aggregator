#!/usr/bin/env ruby

require 'rufus-scheduler'
require 'sqlite3'
require_relative 'db/query'
#require_relative 'parser/query'



module Schedule
	# Simple wrapper for rufus-scheduler
	# in my application
  class Scheduler
		
    def initialize
			@scheduler = Rufus::Scheduler.new
		end
   
		def run
			# Load file
			# load File.join( File.dirname(__FILE__), "./dbparser.rb" )
			# Set interval for start
			#@scheduler.interval '10s' do
			@scheduler.in '5h' do
				load File.join( File.dirname(__FILE__), "./dbparser.rb" )
				# Queries
				query = DB.Query
				q = query[:POINTS_Q]
				SQLite3::Database.new "./de.sqlite3" do |db|
					db.execute( q ) do |data|
					#db.query(q) do |data|
puts ":0 #{data[0]}"
puts ":1 #{data[1]}"
puts ":2 #{data[2]}"
puts ":3 #{data[3]}"
puts ":4 #{data[4]}"
puts ":5 #{data[5]}"
puts ":6 #{data[6]}"
puts "#{DB.Query}"
puts "#{DB.Fields}"
				  	txt = data[6]#pts["parser"]
				  	name = data[2]#pts["label"]
				  	pathdata = "./assets/data/#{data[3]}/"
				  	forimg = "/data/#{data[3]}/"	
						RestAPI::DBParser.new( data[0], name, txt, db, DB.Query, DB.Fields, pathdata, forimg, true )
					end
				end
			end

			@scheduler.join
    end
	end
end

s = Schedule::Scheduler.new
s.run

