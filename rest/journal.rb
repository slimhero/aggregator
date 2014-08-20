require 'sinatra/base'
module RestAPI
	class Journal < Sinatra::Base
		get "/api/journal" do
			Journal = App.struct[:JOURNAL_S]
			result = []
			App.db.execute( App.query[:JOURNAL_Q] ) do |data|
				pts = Journal.new( data[0], data[1], data[2] )
				result.push( pts )
			end	
			json result
		end

		get "/api/journal/:id" do
			Journal = App.struct[:JOURNAL_S]
			pts = nil
			App.db.execute( App.query[:JOURNAL_Q_ID] ) do |data|
				pts = Journal.new( data[0], data[1], data[2] )
			end
			json pts
		end

		#Delete
		delete "/api/journal/:id" do
			#Journal = App.struct.[:JOURNAL]
			App.db.execute( App.query[:JOURNAL_D], [params[:id]] )
		end
	end
end
