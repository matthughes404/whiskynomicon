# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Brand.create(name: 'Buffalo Trace')
Brand.create(name: 'Jack Daniels', 
  variants: [
    Variant.create({ name: 'Old No. 7', style: 'Tenessee whiskey', proof: 80 }),
    Variant.create({ name: 'Gentleman Jack', style: 'Tenessee whiskey', proof: 80 }),
  ])
Brand.create(name: 'Jim Beam')
Brand.create(name: 'Wild Turkey')

