#!/usr/bin/env ruby
require 'rubygems'
require 'sqlite3'
#require 'sinatra'
require 'sinatra/base'
#require 'sinatra/reloader' #if development?
require "sinatra/json"
require "json/ext"
require "erb"
require_relative 'utils'
require_relative 'rest/points'
require_relative 'rest/pointtime'
require_relative 'rest/journal'
require_relative 'rest/data'
require_relative 'rest/state'
require_relative 'rest/auth'
require_relative 'rest/wp'
require_relative 'rest/blacklist'
require_relative 'rest/user'
require_relative 'rest/users'
require_relative 'db/query'

class App < Sinatra::Base
  db = SQLite3::Database.new "./de.sqlite3"
  set :db, db 
	enable :sessions
	#set :port, ENV["PORT"]||3000
	#set :root, File.join(File.dirname(__FILE__), '..')
	set :root, './'
	set :public_folder, File.dirname(__FILE__) + '/assets'
	#enable :static
	set :server, %w[thin webrick]
	set :static_cache_control, [:public, :max_gae => 2678400 ]	
	#set :views, settings.root + '/views'

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
	use RestAPI::BlackList
	use RestAPI::User
	use RestAPI::Users

	get "/" do
		session.clear
		#session[:islogin] = false
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

	get "/user/:id" do
		usr_small = session[:usr_small]

		if session[:islogin] && usr_small != nil && usr_small[:id].to_i == params[:id].to_i
		 	puts "session!"
		  if session[:wp] == 3	
			  #File.read( File.dirname(__FILE__)+"/assets/views/result_my.html")
				# Get aviable list of workplace 
				wp = db.execute( DB.Query[:USER_WP_LIST], [usr_small[:id]] ) 
			  # Get list of source
				#points = db.execute( DB.Query[:POINTS_Q_S] )
			  	
				erb :result, :layout => :base, :locals => {
					# User name for page
					:user_name => usr_small.fio,
					# Workplace list
					:user_wp => wp
					#,
					# Source
					#:points => points
				}
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
		#session[:islogin] = false
		#session[:usr_small] = nil
		#session[:wp] = nil
		session.clear
		redirect "/"
	end

	#s = Scheduler.new
	#s.run
	# !!!!
	run! if app_file == $0
end
