# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  category      :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  website       :string
#  phonenumber   :string
#  address1      :string           not null
#  address2      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  pricepoint    :integer          not null
#  monopen       :integer          not null
#  monclose      :integer          not null
#  monopenend    :string           not null
#  moncloseend   :string           not null
#  tuesopen      :integer          not null
#  tuesclose     :integer          not null
#  tuesopenend   :string           not null
#  tuescloseend  :string           not null
#  wedopen       :integer          not null
#  wedclose      :integer          not null
#  wedopenend    :string           not null
#  wedcloseend   :string           not null
#  thursopen     :integer          not null
#  thursclose    :integer          not null
#  thursopenend  :string           not null
#  thurscloseend :string           not null
#  friopen       :integer          not null
#  friclose      :integer          not null
#  friopenend    :string           not null
#  fricloseend   :string           not null
#  satopen       :integer          not null
#  satclose      :integer          not null
#  satopenend    :string           not null
#  satcloseend   :string           not null
#  sunopen       :integer          not null
#  sunclose      :integer          not null
#  sunopenend    :string           not null
#  suncloseend   :string           not null
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
