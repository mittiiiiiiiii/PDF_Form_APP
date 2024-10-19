package main

type PrintRequest struct {
	Motive              string              `json:"motive"`
	History             string              `json:"history"`
	Experience_Checkbox Experience_Checkbox `json:"experience_Checkbox"`
}

type Experience_Checkbox struct {
	Checked1 bool `json:"checked1"`
	Checked2 bool `json:"checked2"`
	Checked3 bool `json:"checked3"`
}
