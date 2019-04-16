class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # skip_before_action :ensure_signed_in, only: [:create, :login]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def gen_token(user_id)
    payload = {id: user_id}
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  # def create
  #   email = params[:email]
  #   password = params[:password]
  #   name = params[:name]
  #   username = params[:username]
  #
  #   new_user = User.new({
  #     password: password,
  #     email: email,
  #     name: name,
  #     username: username
  #   })
  #
  #
  #   if new_user.valid?
  #     new_user.save!
  #     user_data = {
  #       name: user.name,
  #       email: user.email,
  #       username: user.username
  #     }
  #     render json: { user: user_data, token: gen_token(new_user.id)}
  #   else
  #     render nothing: true, status: 401
  #   end
  # end

  def login
    email = params[:email]
    password = params[:password]

    user = User.find_from_credentials email, password
    if user.nil?
      render nothing: true, status: 401
    else
      render json: {user: user, token: gen_token(user.id)}
    end
  end

  def register
    username = params[:username]
    name = params[:name]
    email = params[:email]
    password = params[:password]

    user = User.find_from_credentials email, password, name, username
    if user.nil?
      render nothing: true, status: 401
    else
      render json: {user: user, token: gen_token(user.id)}
    end
  end


  def verify
    ensure_signed_in
    render json: { user: current_user }
  end


  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(
        :name,
        :password,
        :email,
        :username
      )
    end
end
