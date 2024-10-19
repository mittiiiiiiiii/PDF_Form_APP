package main

type PrintRequest struct {
	Motive  string  `json:"motive"`
	History History `json:"history"`
}

type History struct {
	HistoryText         string              `json:"historyText"`
	Experience_Checkbox Experience_Checkbox `json:"experience_Checkbox"`
}

type Experience_Checkbox struct {
	Checked1 bool `json:"checked1"`
	Checked2 bool `json:"checked2"`
	Checked3 bool `json:"checked3"`
}
