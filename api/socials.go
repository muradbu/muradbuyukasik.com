package api

import (
	"fmt"
	"net/http"
)

type Link struct {
	Text string
	Url string
}

func Socials(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "")
}