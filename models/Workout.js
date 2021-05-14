const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
        {
            type: {
                type: String,
                required: "type must be included"
            },
            name: {
                type: String,
            }
            
        
        
        
        
        }],
  
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;



