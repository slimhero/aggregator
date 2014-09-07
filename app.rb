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
require_relative 'rest/auth'
require_relative 'rest/wp'
require_relative 'db/query'

class App < Sinatra::Base
  db = SQLite3::Database.new "./de.sqlite3"
  set :db, db 
	#set :session, true
	enable :sessions
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
	use RestAPI::Auth
	use RestAPI::WP

	get "/" do
		session.clear
		#session[:islogin] = false
		#File.read( File.dirname(__FILE__)+"/assets/views/index.html")
		File.read( File.dirname(__FILE__)+"/assets/views/login_my.html")
	end

	get "/wp" do
		usr_small = session[:usr_small]
		if session[:islogin] && usr_small != nil 
			File.read( File.dirname(__FILE__)+"/assets/views/wp_my.html")
		else
			redirect "/"
		end
	end

=begin
	get "/admin" do
		#File.read( File.dirname(__FILE__)+"/assets/views/admin.html")
		File.read( File.dirname(__FILE__)+"/assets/views/points_my.html")
	end
=end

	get "/user/:id" do
		usr_small = session[:usr_small]

		if session[:islogin] && usr_small != nil && usr_small[:id].to_i == params[:id].to_i
		 	puts "session!"
		  if session[:wp] == 3	
			  File.read( File.dirname(__FILE__)+"/assets/views/result_my.html")
			elsif session[:wp] == 1
				File.read( File.dirname(__FILE__)+"/assets/views/points_my.html")
			elsif session[:wp] == 2
				File.read( File.dirname(__FILE__)+"/assets/views/users_my.html")
			end
		else
			puts "redirect!"
			redirect "/"
		end
	end

	get "/logout" do
		session[:islogin] = false
		session[:usr_small] = nil
		session[:wp] = nil
		session.clear
		redirect "/"
	end
=begin
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
=end
	# !!!!
	run! if app_file == $0
end
