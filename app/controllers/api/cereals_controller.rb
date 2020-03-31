class Api::CerealsControler < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

    def show
        render json: { cereals: Cereal.all }
    end
end