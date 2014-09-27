'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		  fs = require('fs'),
	  Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	host: {
		type: String, 
		default: '',
		trim: true
	},
	location: {
		type: String,
		default: '',
		trim: true
	},
	address: {
		type: String,
		default: '',
		trim: true
	},
	date: {
		type: String,
		default: '',
		trim: true
	},
	time: {
		type: String,
		default: '',
		trim: true
	},
	cost: {
		type: String,
		default: '',
		trim: true
	},
	link: {
		type: String,
		default: '',
		trim: true
	},
	details: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	image: {
		type: String, 
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Event', EventSchema);
