package api

import (
	"net/http"

	"github.com/a-h/templ"
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

	socialLink := components.SocialLinkList(links)

	templ.Handler(socialLink)
}
