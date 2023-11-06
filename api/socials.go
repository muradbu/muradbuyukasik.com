package api

import (
	"net/http"

	"github.com/muradbu/muradbuyukasik.com/components"
	"github.com/muradbu/muradbuyukasik.com/types"
)

func Socials(w http.ResponseWriter, r *http.Request) {
	links := []types.Link{
		{Text: "𝕏", Url: "https://x.com/muradbu"},
		{Text: "Github", Url: "https://github.com/muradbu"},
		{Text: "Twitch", Url: "https://twitch.tv/muradbu"},
		{Text: "YouTube", Url: "https://www.youtube.com/channel/UCLHZDHY0FfcqTjsl5mJLoxA"},
		{Text: "Instagram", Url: "https://instagram.com/muradbuyukasik"},
		{Text: "LinkedIn", Url: "https://www.linkedin.com/in/murad-buyukasik/"},
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=604800, immutable")

	socialLink := components.SocialLinkList(links)

	err := socialLink.Render(r.Context(), w)
	if err != nil {
		// Handle the error, possibly returning an HTTP error code like 500.
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
