FactoryGirl.define do
  factory :task do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    open true
    pick_up_lat { Faker::Address.latitude }
    pick_up_lon { Faker::Address.longitude }
    pick_up_address { Faker::Address.street_address }
    drop_off_lat { Faker::Address.latitude }
    drop_off_lon { Faker::Address.longitude }
    drop_off_address { Faker::Address.street_address }
    user
  end
end
