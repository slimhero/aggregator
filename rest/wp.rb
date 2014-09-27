require 'sinatra/base'
module RestAPI
	class WP < Sinatra::Base
		get "/api/workplace" do
			WP = App.struct[:USER_WP]
			result = []
			App.db.execute( App.query[:WP_LIST] ) do |data|
				pts = WP.new( data[0], data[1] )
				result.push( pts )
			end	
			json result
		end


		get "/api/wp" do
		  usr_small = session[:usr_small]
		  if session[:islogin] && usr_small != nil
				WP = App.struct[:USER_WP]
				result = []
				App.db.execute( App.query[:USER_WP_LIST], [usr_small[:id]] ) do |data|
					pts = WP.new( data[0], data[1] )
					result.push( pts )
				end	
				json result
			else
				redirect "/"
			end 
		end


		post "/api/setwp/:id" do
			usr_small = session[:usr_small]
			puts "usr_small: #{usr_small}"
			puts "session[:islogin]: #{session[:islogin]}"
			if session[:islogin] && usr_small != nil
				WP = App.struct[:USER_WP]
				pts = nil
      
				App.db.execute( App.query[:USER_WP_Q], [usr_small[:id],params[:id]] ) do |data|
					pts = WP.new( data[0], data[1] )
				end

				session[:wp] = pts[:id]
				redirect "/user/#{usr_small[:id]}"
			else
				puts 'no redirect'
			end
		end

	end
end
