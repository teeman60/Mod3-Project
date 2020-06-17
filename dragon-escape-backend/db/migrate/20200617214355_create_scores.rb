class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.references :user, null: false, foreign_key: true
      t.string :game
      t.integer :high_score

      t.timestamps
    end
  end
end
