FactoryGirl.define do
  factory :task do
    title "MyString"
    lat 1
    lon 1
    description "MyString"
    open true
    user
  end
end
