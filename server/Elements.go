package main

type PrintRequest struct {
	Motive   string `json:"motive"`
	History  string `json:"history"`
	Checked1 bool   `json:"checked1"`
	Checked2 bool   `json:"checked2"`
	Checked3 bool   `json:"checked3"`
}
