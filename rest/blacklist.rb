require 'sinatra/base'
module RestAPI
	class BlackList < Sinatra::Base
		# Black List 
		get "/api/black" do
		  #usr_small = session[:usr_small]
		  #if session[:islogin] && usr_small != nil
				BL = App.struct[:BLACK]
				result = []
				App.db.execute( App.query[:BLACK_LIST_Q] ) do |data|
					bl = BL.new( data[0], data[1], data[2], data[3] )
					result.push( bl )
				end
			#end	
			json result
		end

		# Black List Rules
		get "/api/black" do
		  #usr_small = session[:usr_small]
		  #if session[:islogin] && usr_small != nil
				BL = App.struct[:BLACK]
				result = []
				App.db.execute( App.query[:BLACK_LIST_Q] ) do |data|
					bl = BL.new( data[0], data[1], data[2], data[3] )
					result.push( pts )
				end
			#end	
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
