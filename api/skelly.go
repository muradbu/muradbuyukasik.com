package api

import (
	"net/http"

	"github.com/muradbu/muradbuyukasik.com/components"
)

func Skelly(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=604800, immutable")

	skelly := components.Skelly()

	err := skelly.Render(r.Context(), w)
	if err != nil {
		// Handle the error, possibly returning an HTTP error code like 500.
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
