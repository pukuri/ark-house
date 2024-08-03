class Api::V1::TeamsController < ApplicationController
  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end

  def members
    @members = Member.where(team_id: params[:id]).limit(6)

    render :members
  end
end
