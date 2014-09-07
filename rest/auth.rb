require 'sinatra/base'
 
module RestAPI
	class Auth < Sinatra::Base
	
		#Update
		post "/api/auth" do
			puts "Params"
			puts "#{params}"
			if params.length != 0
				begin
					puts params[:login]
					puts params[:pwd]
					Users = App.struct[:AUTH_S]
					App.db.execute( 
						App.query[:AUTH_Q_S], 
						[
							params[:login], 
							params[:pwd]
						]	
					) do |data|
						puts "User found #{data[0]} #{data[1]}"
						
						usr = Users.new( data[0], data[1] )
        		session[:usr_small] = usr
						session[:islogin] = true
								
						puts "islogin #{session[:islogin]}"
						puts "usr_small #{session[:usr_small]}"
 
            puts "Get WP"
						# Check wp
						App.db.execute( App.query[:USER_WP_COUNT], data[0] ) do |count|
							if count[0] > 1 
								redirect "/wp"
							else
								redirect "/user/#{data[0]}"
							end
							puts "#{count[0]}"
						end
					end
				rescue Exception => e

					Err = App.struct[:Message]
					json Err.new( "error", e.message, e )
				end	
			else
				puts "no data: redirect to '/'"
				redirect "/"
			end
		end

		#Update
		post "/api/auth" do
  		data = JSON.parse request.body.read
			App.db.execute( 
				App.query[:DATA_U_STATE], 
				[
					data["stateid"], 
					params[:id]
				]	
			)
		end

		#Update
		put "/api/data/user/:id" do
  		data = JSON.parse request.body.read
			App.db.execute( 
				App.query[:DATA_U_USER], 
				[
					data["userid"], 
					params[:id]
				]
			)
		end
	end
end
