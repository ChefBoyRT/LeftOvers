class User < ApplicationRecord
    has_many :foods
    has_many :wastes
    
    has_secure_password
    validates :username, uniqueness: { case_sensative: false }
end
