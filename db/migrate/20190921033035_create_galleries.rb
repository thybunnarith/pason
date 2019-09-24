class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :name, null: false, limit: 100
      t.string :logo

      t.timestamps
    end
  end
end
