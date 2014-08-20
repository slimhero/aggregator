#!/usr/bin/env ruby
require 'rubygems'
require 'sqlite3'
#require 'sinatra'
require 'sinatra/base'
#require 'sinatra/reloader' #if development?
require "sinatra/json"
require "json/ext"
require_relative 'utils'
require_relative 'rest/points'
require_relative 'rest/pointtime'
require_relative 'rest/journal'
require_relative 'rest/data'
require_relative 'rest/state'
require_relative 'db/query'

class App < Sinatra::Base
  db = SQLite3::Database.new "./de.sqlite3"
  set :db, db 
	set :session, true
	#set :port, ENV["PORT"]||3000
	set :root, File.join(File.dirname(__FILE__), '..')
	set :public_folder, File.dirname(__FILE__) + '/assets'
	#enable :static

	set :query, DB.Query
	set :struct, DB.Struct
	set :fields, DB.Fields
	
	use RestAPI::Points
	use RestAPI::PointTime
	use RestAPI::Journal
	use RestAPI::Data
	use RestAPI::State

	get "/" do
		#File.read( File.dirname(__FILE__)+"/assets/views/index.html")
		File.read( File.dirname(__FILE__)+"/assets/views/login_my.html")
	end

	get "/admin" do
		#File.read( File.dirname(__FILE__)+"/assets/views/admin.html")
		File.read( File.dirname(__FILE__)+"/assets/views/points_my.html")
	end

	get "/user" do
		File.read( File.dirname(__FILE__)+"/assets/views/result_my.html")
	end

	get "/api/rows" do
		Q_ROWS_EXT = "SELECT v.ID,v.OPERDATE,v.STATE,v.SOURCE,v.ROOMS,v.PHONE,v.DESC,v.PRICE FROM V_ROWS_EXT v;"
		results = db.execute( Q_ROWS_EXT )
		json results
	end

	get "/api/columns" do
		Q_FIELDS  = "SELECT f.ID, f.CODE, f.FIELDNAME FROM V_FIELDS f;"
		results = db.execute( Q_FIELDS )
		json results
	end
	# !!!!
	run! if app_file == $0
end
