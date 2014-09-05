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


		get "/api/:userid/wp" do
			WP = App.struct[:USER_WP]
			result = []
			App.db.execute( App.query[:USER_WP_LIST], [params[:userid]] ) do |data|
				pts = WP.new( data[0], data[1] )
				result.push( pts )
			end	
			json result
		end


		post "/api/:userid/wp/:id" do
			State = App.struct[:USER_WP]
			pts = nil
      
			App.db.execute( App.query[:USER_WP_Q], [params[:userid],params[:id]] ) do |data|
				pts = State.new( data[0], data[1] )
			end

			session[:wp] = pts[:id]
		end

	end
end
