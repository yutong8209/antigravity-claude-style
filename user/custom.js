/**
 * antigravity-codex-theme · Claude Code Mascot (Clawd) & Turn Navigator
 * Hot-reloaded via codex-theme user/custom.js
 */
(function () {
  const CRAB_SHEETS = {"idle":{"frames":24,"box":[24,20,24,16],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAwCAYAAABHTnUeAAAA+ElEQVR42u3bsQ3CQAwF0H+IXRgigzAKMzBEBmCHLMI0UNGcBAGl4BS/VwL6FVaMjVs698v5kQ1O11v79L58+SPlHwKFvS2AaV4yzctqwLefky9/xHxPAEprW3sq2GULBAoAFADs+DdAzInlxx4AtECgAKCQ41qv9Oq5+t6pf/3X3ky+/BHyPQHQAoECgNgDmBPLjz0AuAfwf3H57gHAPQCYAoECAAUA9gAxh5YfewDQAoECgLgH8H90+XEPAFogUAAQewD58mMPAO4B5NfgHoASXyD3AGAKBAoAFADYA8QcWn7sAUALBAoA4h5Avvy4BwAtECgA+LcnkKN/7mnIqCwAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAwCAYAAABHTnUeAAAAOklEQVR42u3BMQEAAADCoPVP7W8GoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDeQMAABeOTGmAAAAABJRU5ErkJggg=="},"idle-look":{"frames":31,"box":[24,20,24,16],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABMbHjfAAABSUlEQVR42u3dwY3CMBAF0B9ELxSRQiiFGigiBdBDGqEaOOViCQJERE783nFZfYlII088tuhSuF/Ojyxwut66d5/Ll19T/iHQsJcF0A9j+mGcDfj0/+R7NjXmWwFoWre0p4JdtkCgAEABwI7fAWKfWH7MAUALBAoAGnKc65Wmnqvsncq/f9ubyZdfQ74VAC0QKACIOYB9YvkxB4CWWyDnxeUvyd/Sd7AC4D6Ax4AWCBQAKAAwB4h9YvkxBwAtECgAiPsAzqPLj/sAoAUCBQAxB7APLT/mAOD3AeJcvfwN5VsBcB/AY0ALBAoAFACYA8Q+sfyYA4AWCBQAxH0A59Hlx30A0AKBAoCYA9iHlr9SvhUA1ioA58U9m5p/g8AKAO4DsGf/fiewAuAdABQAmAPYh5YfcwDQAoECgLgP4Dy6/NryrQCgAEABwM+e2Uo8TK1/jy4AAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABMbHjfAAAAR0lEQVR42u3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4N8AwEAAAWSBsuAAAAAASUVORK5CYII="},"idle-wave":{"frames":12,"box":[24,15,24,21],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAqCAYAAADlA1TjAAABJ0lEQVR42u3cyw3CMAwAUBd1F4bgyg4MwBDMwBAMwA5cGYJp4ISE+JVKLamb925IlRVVMXGauk3wV5fd5vr4e7k/NsZfbvwLU5KaSQCq1roFSpSaxy8BCsk2Mec6/rYrA4e+MVOP3/cfSvzc8VslCvYAb6wOp4iIOG/XXwP8el22+F2JZfzzGL+nQFStGbtmy765G/r+iD+t+IvME1X9T3WbYJOecBIMA+0BwjmA+BXHtwKgBAIJAOEp0EutdK+5Pj2ffb6uby0mvvgl41sBUAKBBAAAAKLGVyFCxxY2wRB1HoRNval57i97oR9AiUX+pvjsTdml42MPAJGuKX7spubwhTisAJri0RQP9gCgKT6cA2AFAAkAEgBCU3zq+FgBQAKABICR3AAtroMyqwB90gAAAABJRU5ErkJggg==","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAqCAYAAADlA1TjAAAANklEQVR42u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4DH4qAAH4CjvkAAAAAElFTkSuQmCC"},"idle-laptop":{"frames":43,"box":[14,13,34,23],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACKCAYAAABigBWEAAAFPElEQVR42u3dv20cRxQH4HeH7UEKlbEIBk4MsASnBlyEa2ARBJiyBANMGLgIZwqlKuRopeOC93/m5u3M9wFMhJP4087tu9nZ2zcRAAAAAAAAACSyufQv/vf3Hz+u+cV3jy+bEv8BOXLmYAyTQ0ANCuoYObbXBrp/eo37p9dir5OjrxyYgUDzGUyrSys5DufY3GrqU2qKJkfOHLVzyZEzxzagoiyXSHLUyeEShhRv5tm/f/0ux4pyKCBUvfNyygnw0WtKX+O3yDHC8ZguveZqdVtKjpw5erqF7JZ6WAMB6lNAiNZ3BhwPBQR+njStT5xMJ27vx2MqFW6+ztp3Tb58Xa2DJEeuHK1PGushdY+HuzDc9I2rsPeVwyUMYA0EAAAAICq0NASiu/4q5/YdsYgKhLswQPGH6Y79XZcwWt2hgBz09fu3iIh4eH7bdPdNVF235ZAj1tdUWd8JYOplxjG3XzvWaenU18WVbeDkIAZ4sHAafQ2h1Ayq1VOfWXIoqHVzlDpfSh+Hbp7GPXXAa3/SyuEDZqQ2Alc3jC1Vse2D0keO2o+fr+V4ZHyfXprp0F2Y7S33oCixD4XFV5+6RD+LqC3a1N89vmy8WSPlupBxGau/6rTWTxgt65wwFtndxvVG7SRHlhMky1pUeBYGoGABUY2Bqy5hsq496LrdNsep/75xaZ/jkgzzrdxu94WBkRYvrYEACggAAAAAAAAAAAAxVkvDc78avPwO/Udt0YDo/2G6f/787cda2+fVKmRyyDFyjumcX77viTwgPAtzSuU61hy5VPNkwMN0UbvTe+tCJoccI+fYXnpNBDCdWzyObeNwq53OWuY4Z0GqVo7lgvaXT5+Ni3G5+bhMa5p56C4VNpQi1bgcLSDL2zet3iyZbiFncezTzbgYl+YFxKcLYGOpqNO4V4E1LgpIxW7s8yVQiSnV7npMq2lilin7w/Nbmn1ojcu447KaGci+tZgWhSxLQc2Qw7iMPS7bUiu8+6ru8s9LD9DIOe4eXzbzj+NhXFocj+05B2N5UA5td7n889JP4bbK8fD8ttn9Gf14GBfjAgAAAAAAAAAAQNgXJrSpl0MOOc7NsdqmykDoyg4MVEC0y5dDDjnMQIC4SUMh7fJtY2BcjIueqLYxMC6M21TZNgbGxbjkGhdrIEDdGYh2+WEbA4zLJQVEu/ywjYFxMS497AtjGwPjYlxy5dhqlx+2MTAuxqXWtg7a5YdtDIyLcQEAAAAAAAAgemyqDFHx0fr56+i+fxAe5yf3SVurA3hPPUL2feFKjgsLiHb5OXPoh4EZCBcXsGVham1u0HusVd6pr8sygyk1E+glhwLS0fT82MmY+WTNVgCpNAPJ8iaVo481h/m4fP3+7V0Pj32Pm699RtRbDi0NO5Dl01tXNDMQ7fJjXdsY7BaPtYxNC6f+35evK73W0FuOySeLmUdvhSNLpkzHplaWye3BWOU2BhG/bgH3UuB3C6IvkrmNywCfcB9NrS/JNRdld2Oi7821W79Zlz0eyb2twYi/P1uO5jMQ7fLzXb4c+pS/e3zZHOu6Pf/5fFxrXTKc2gV8maf0721dRHrNMWmX32cOritktU743nJstcuXw2I5N1sDadUe/sunz+9+Rm+Xv7se9NG6kLb9AAAAAAAAABC2dQjdrtecA8LDdMAQBeT+6fVn38QSr5MDzECAsAaS7pq/9mPRp+bKkgNiDR3JSp8wWTbKAVzCAAoIED2ugWS95vc9EIj8ayD7Wp45YcAlDIACAqxoYyndrnPmADMQQAEBFBCAd/4HyvgDJ3UI0qEAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACKCAYAAABigBWEAAAB70lEQVR42u3dQQ7CIBAF0I/x/leuSzcao6hlmPcS94TfjgXrkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC0wzjg7mIKAAUEUEAABeQfewD2AeBkV5uYXxnDaDwOGhtFi4YbBTyBbFnwwBNIkWWLggIAkM3fwvXLF/EeCDPLSEUEBQT/xUEBITbbcWGwz5OHa8oTCDwtDgoEgL0oTyC4YcyJAgKKyMQepjmBIi+0rfhCnZf8oNgNs9pNe8p47KhTfSkzjOPl8u5nY1NA2HE/ZDQdBwAAAAAAAAAAAAAAAAAAAABANMxFLnLJp13ZD5Oy5A0jF7mkyrEOhzb1Lla5yGWHLtO6bstFLgXHYlJcrHKRy1RX9tZt6h0fIBe5zB/roE294wPkIhcAAAAAAAAAAAAAAAAAAAAAgGiXj1wauOh0HccYyEUumxzrEO3yXaxyqVncdbqODuRykYtJcbHKRS7tj3VwjIFc5LL4OIZ2+XGMgVzkAgAAAAAAAAAAAAAAAEDK9aUA6vQBVTzSuycqishs4fCXcfAN76mDul3ZyfLNhGHZruw6XdcrIseDD82+2Vbp7ajv53vFzb4D1rU6XYMioohA4yWMdvn1ljOwZAGx3o99BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAjN0jO0KHi9KHDAAAAAElFTkSuQmCC"},"thinking":{"frames":48,"box":[20,0,30,36],"url":"data:image/png;base64,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","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADYCAYAAADVqm7JAAAEi0lEQVR42u3d0XLjKBAFUHDp/3+5530qdmwHaEGf85at2dwB1BLCu+7WAAAAAAAAAAAAAAD203/4Z/HGn5lBrrEa6+C/QMg9KtdYD8t92ITAvq43twEtafsh11iN1eDlGuuZubbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAbffeSEAb/t3QXQGzzYV1o9zMsfYXP8OQjgFxcG72WLPyy13QkTC5GblZF1ZGbtzoxjEt+1K8Kduc7O1V1lauN+c8bXZvpCjYUA1G3zTil5v20m1H5vbO+6Ax7zjPS16T+hvbu8wtrRNZY955ntvKBt+RWEhZ2RUbQOsNnJPdVxdRSyxgucZsnpsG33C0y9bONto2+qxsF5a5VsSbZNtCAwAAAAAAAAAAAAAAAAAAAAAAANB0bqNpNv6n/L74d4Ua5IQeyW3CV7C+O5aR3RM++V1LujZkLeqdsqNI7szvMX42nlkNuN8tjhhcTFm52l/+khWH5MaLuZ35JPx0XVcX8OjsyF7ruEE/1ztlj86PJxfZzNz48ALfuYBvU0grcq92zwOunnhw0Rf1P/6/jeqJhxn9xVz3H+ZgVGvZ7lRwzd0pFj8RvnkqrMjO2kKX6GJfsdVqLCrev2y1Zk3e7MOkSMq9axHd5QT+uNzZi/pb0c7Ornix4j/kuO2H6HD319E+u8H3ktAnvzuSbi6ReFOrNuaKa9xnvus+XoRmPBWr5ZrrGms8zWWXAymf6kwt4DhxsDfMNddn5/bBn2+baEUs96Tchx0O+N92AQAAAAAAAAAAAAAAAAAAAICmpUbbrSuEbhSHXh/ZF1W0te1ejm1qNXjuKjd53+b6+PRfGjmxn2SPbHr2zUSNaD6WlfvNnFVv8r66iL/OzSqib7qpjy7iSGjKnJWryfsec96+fQpH0sR+2009+4KanR+JF9Qd5rsp4N9zry++t3b0d9zu8p25vflOYdp5PV6y7oyRPPY4OLfyO/BWh1j9i4D+4ueVA+yn9Xpt925/mjnfvVDv6o9y+4YTCwDt2KZL4SClVTrPsL7tvAbf/QaHF10hLelda30PLODsXUEopKN3feEAcm4BR9HXiSrjtr4H5F5vhHYX1nHjtb620C6szcdrfd2wTLZFNs/W14WFAgYAAAAAAAAAAAAAAAAAAAAAoPmKGIYtaiQtbma29rIct7jVeslm3ECycj35D53UjEKK5CKu2PgbW6ujslcXU0ZutPVPxmg5T+WsXAV8k+xVBWyLiXdgW2jvwO3ABt9/ndzMvje9SI/f1bnP+hmFPr/gSQgAUPAdGFh8TnEVP5ipmBuJN/Fq6/t/U/PhHr8EZzyh5Z471orrO9VllwP7nthfupmXzI2CH0FFyztjSvusXDEpYvN849yHHQ74tAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoLXnTZdCcyZoWzf47gktGd04YFABZ+8KKtw4MnIrjfX43OumDaCr3DiyciuN9ejc643gXqhzPNhCD7pjVblxRJFMuYVYaGOV+4bHZh9vAQAAAAAAAAAAAAAAAAAAAADAE/8AZ56Iufksc5YAAAAASUVORK5CYII="},"typing":{"frames":6,"box":[15,22,28,14],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAOCAYAAAA2YxATAAABCUlEQVR42u2aPwrCMBSHE/EOOrr1EB1chB7BVfAQnqGHKHTtEYQuHTyEm6OeQqeAfVLatH2Bxu+DDPlTfuRH3iOvxBoP7pfj22f94/Vs9bOyseihp6W3RFYGAAhAAAKwh7SoTVrUo+d9QQ89AhAA1Fj7LL6dD5Pm5y7cp+pdT/uW1m6zVd8ffur5GWUA+v7JAvyEmQJQZrQY6cvSc4KfQA0IsNQaMARJXlmua/hJAJrf1wna14vQV7SsbGzoQ4mfMDgA5VMgZ67LqrIv17nvpx6EWPTwM4xe9DWgzHJdWU+OjzVWUy/JK+tajPv7Rz+jDUCZuWS/a3zoo9qsbOx309YLvT/81NVbIh8bcFH1c0M4RAAAAABJRU5ErkJggg==","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAOCAYAAAA2YxATAAAAZElEQVR42u3WgQ3AIAgAQen+O9MVWlOF1LsFNB9IGAMAAAAAAGCZlEBPalwFQ5MHLISePF7AMDSf0pPpqPnDtyre0xNDYwktYXfx4ryIhadMbD6dYtSfa3rSIlxu/ls2bqHnYW6S9y/jZM1ljwAAAABJRU5ErkJggg=="},"happy":{"frames":32,"box":[18,6,34,30],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAB4CAYAAAA62q2WAAAEN0lEQVR42u3dwW3cMBCF4ZGQXlKEr+7BBbgI15AiXEB68NVFuBr7FIMwNptYK5JD8vtPSSAoD8TMm6Ek7kQAAAAAAADMz2YJxuLt6eG9/PvPX7+3TPfDWvywBBLXeuAouyUAMG0HotJBfDAQnMSfgP4a6GfdF2AgCyXu2XoYGRhIh9bZelgPBqLyD8vd80tERLw+3p9ync5QJ3STgWR9OJWt0mVI3Lvnl8/7ln8+et3I69ErPrLkS2sdtjCDJm5Zecv7Xbv3pevOrLSZjAzR90vU2k7+3cD9qufWStf74eVZiUtHjvjIki+tdewjV/7Xx/vPALjlOszZGYqPBGdhVH466BivU26lY+fswNydUE0dmwpDBx10HNXhMB2AcBoXQPgSFd9uT8s289K/Xbv27enh3VeXYCAS13rAFgaADiRaH6L6V6VzWjSW/vkF8cFAcPKrPlsGNDcQzp47cf927x7/JyPLky+1dOhABk5c6wFbmBsD838DVeCuaVziI7yFAQAAAAAAAIDI+otkCKMcgfAdiMS1HgivcQHoQFQ6iA8GgjDKEQwEQyZur8OKjAwMxDR664G5DUSli2GGfIsPBpL+4VS2SpchcTMNte69Hr3iI0u+tNZhCzNo4paVt7zftXtfuu7MSpvJyBB9v0TNMm3cjF46RoiPLPnSWsdu5ijMpBUf1c7CqPx00DFep9xKx87Zgbk7oZo6NhWGDjroOKrDYToA4TQugPAlKgy1BgORuOskrvWwhQGAdToQM3ohPhgIDLXGSgbC2XMnbo+h1owsf77U0qEDMY3eemCdLYzp6xAf4S0MAAAAAAAAAMQMv0iGMMoRCN+BSFzrgfAaF4AORKWD+GAgCKMcwUAwZOL2OqzIyMBATKO3HpjbQFS6GGbIt/hgIOkfTmWrdBkSN9NQ697r0Ss+suRLax22MIMmbll5y/tdu/el686stJmMDNH3S9Qs08bN6KVjhPjIki+tdexmjsJMWvFR7SyMyk8HHeN1yq107JwdmLsTqqljU2HooIOOozocpgMQTuMCCF+iwlBrMBCJu07iWg9bGABYpwMxoxfig4HAUGusZCCcPXfi9hhqzcjy50stHToQ0+itB9bZwpi+DvER3sIAAAAAAAAAQMzwi2QIoxyB8B2IxLUeCK9xAehAVDqIDwaCMMoRDARDJm6vw4qMDAzENHrrgbkNRKWLYYZ8iw8Gkv7hVLZKlyFxMw217r0eveIjS7601mELM2jilpW3vN+1e1+67sxKm8nIEH2/RM0ybdyMXjpGiI8s+dJax27mKMykFR/VzsKo/HTQMV6n3ErHztmBuTuhmjo2FYYOOug4qsNhOgDhNC6A8CUqDLUGA5G46ySu9bCFAYB1OhAzeiE+GAgMtcZKBsLZcyduj6HWjCx/vtTSoQMxjd56YJ0tjOnrEB/hLQyA8fkALyHJsnPhb50AAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAB4CAYAAAA62q2WAAACA0lEQVR42u3d0Q3CMAwEUB/771wmaMQf5+i9CRA255RI9QzNHl8BzT6+gtof7iNEYGd4PGUhIsxhUaNqWmG+oT/+/jlS8iWkqBDxu60LkZT+UKNnTRinDpxAPOOiVqBRm6eu0yJzusZ1fSlA3z5DSp639Yf/I0yYH+ogyPSHyYc6cG1/PK4sYWd4RIgBq08gSgEAAAAAAAAAAAAAAAAAAAAAADDe+MRY64D1FoD1FsIc7D6lOcy91Hh6tnq3bV+36qIvRFpXGETPmjBOHTiBeMZFrUCjNk9dp0XmdI3r+lKAvn2GlK1UFCL+jzBhDnUQZPrD5EMduHc3ritL2BkeEWLA6hOIUgAAAAAAAAAAAAAAAAAAAAAAAIw3PjHWOmC9BWC9hTAHu09pDnMvNZ6erd5t29etuugLkdYVBtGzJoxTB04gnnFRK9CozVPXaZE5XeO6vhSgb58hZSsVhYj/I0yYQx0Emf4w+VAH7t2N68oSdoZHhBiw+gSiFAAAAAAAAAAAAAAAAAAAAAAAAOONT4y1DlhvAVhvIczB7lOaw9xLjadnq3fb9nWrLvpCpHWFQfSsCePUgROIZ1zUCjRq89R1WmRO17iuLwXo22dI2UpFIeL/CBPmUAdBpj9MPtSBe3fjurKEneERIQasPoEoBQAAAAAAAAAAAAAAAAAAAAAAXOALqhfvSfh7RAEAAAAASUVORK5CYII="},"error":{"frames":24,"box":[23,11,26,25],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAABLCAYAAAABBQn0AAABm0lEQVR42u3cwW0CMRAF0M+KXlIEV3pIARSRGlIEBaQHrhRBNcmJAyiwSzZ4bfPeBQkZPtLIsr0ykwAAAAAAAABwYfXbm6eP9+85X/r2+bUaG1Mio9cs9akna7g1cLM/XLze88jY0hm9ZqlPHVk3J9Bxt81mf8hxtx0NeWRs6Yxes9Snjqy7K9D5w1Nm6dSxpTN6zVKfOrKcgZyB1OcZZyBgnAkEmfkYe+6yNmXZK5HxX8t0bVnqU2+WFQhMIDCBwFUej0k9xn6l+qynDD6HXn/4+v2//LgSGb1mqc/yWbZw4AwEJhAAAAAAAAAAELex47av29iaikTjvmisqD7RWDEaK6qPxooa90VjxWisaI/tDKSxIhD/B4JorKixovpEY0WwhQMTCHCVJx5jq080VtS4LxoraqwIzkCACQQAAAAAAAAApPvb2HLk9JAzLN3oTo6clnOGpRvdyZHTcs6wdKM7OXJaznEGkiPnGWcgIP4PBOmhsaIcOT3mWIHAFg5MIHCVx2NSOa+Us66h0Z0cOa3m2MKBMxCYQNCcHxqW5WOVyKJXAAAAAElFTkSuQmCC","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAABLCAYAAAABBQn0AAAAk0lEQVR42u3csQrAIBBEwUf+/5+TxjqQwiDHDFgvKFt4xdV39zo7/ZExNWva+xztcgWgQKBAAGCI4O4MEQAAAAAAAAAAAAAAAAAAAMhOhOxEkJG1VqBAgAIBkCGCj70hAgAAAAAAAAAAAAAAAAAAADRoh4AcOVlrBQoEKBAAGSLIkQMAAAAAAAAAAAAAAAAAAAAvHoBsR8vwrJ6sAAAAAElFTkSuQmCC"},"notification":{"frames":16,"box":[24,8,24,28],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAA4CAYAAACrHfdzAAABJUlEQVR42u3czQ0BURgF0DsyvSjCVg8KUIQaFKEAPdgqQjWsJEjGDDNvIs85O4nchfjm/ZCbAAAAAAAAAFCXZurAy25zfXy93B8b+fPl85mFj4B/1vY9oUqvEPKnze9bUeQ/57ddb1wdTkmS83b9NnDo++TPkz90iyW/ZwDGKr23lY8zAIzUTL2nfX2yyZ83n5GHYOpwH7RSA1ZLvgGo9Isvf1i+MwB+CXZPLP9f860AxDUoGACIa9Cua6iu++tvr6vky/+FfCsAtkBgAAAAAAAAAAAAohs0ujujGzT+CwTRDaq7M7pBoxs0ujujG1Q3aPTTRDeoMwBEN6j86AbVDUp0g0Y3KM4u0Q0KukHly49uUIhrUDAAEN2g8uVHNyjYAoEBgAJum8colXsFaJEAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAA4CAYAAACrHfdzAAAAhklEQVR42u3csQ2AQAwDQBOx/8rQMMSb3Em0X1iWSOWEJs/3tb5/nFEgBdqc/ygQm40I2OwWQZWr/H03nBNI/iiQ/EvzVyAAAAAAAAAAAAAAAAAAAAAgRgliGU6B5G8bFPwBILZBYxs0tkHdcPKXPwokf9ugAAAAAAAAAAAAAAAAAAAA/NcLs/xH0QBTK9kAAAAASUVORK5CYII="},"sleeping":{"frames":32,"box":[18,1,31,35],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAACMCAYAAABRYmTcAAACnElEQVR42u3dPYrbQACG4W+D72CX7vYQKtQYcoS0Ah9iz7CHEKTdIwjUpPAh0qVMTuEUwWYRCKKfWXa1z1PZRvhVM/YgiZkEAAAAAAAAAAAAAAAAAAAAAAAAAGCDHv73wJ9P365zAr/+/E6SfP3+42HuSWpra89rf/EbB9tlgIMB/k/V9qnafrXjtLW1y7Z3U+KX82nV47S1tcu2TdHBFB3Ilm6Tzb1kn5FL+Ely3B/urx+fX7S1tQu3/YODKTpggAMeVY1HF7W136S9m/plt4sGt5MZXkQYft419XWtXyNtbe1pbVN0AAAAAAAAAAAAAAAAAAAAAAAAACCfdtnkpVusLFlSVltbe37bqqoQO5sABjjwYQd41fap2n6147S1tcu2J21ddDmfVj1OW1u7bNsUHUzRgWzlPvjSe3IZuUeXJMf9IcNdFLW1tcu0/YODKTpggAOeRY9nk7W13037fgKvT2L4fuzzrqmvXVMvOnltbe15bVN0AAAAAAAAAAAAAAAAAAAAAAAAAAAg21sXPZm/bvPi9Zq1tbVnty2bDLF1EbD1AV61faq2X+04bW3tsu3dlPjlfFr1OG1t7bJtU3QwRQeypdtkS7czzeASfpIc94f768fnF21t7cJt/+Bgig4Y4IBHVePRRW3tN2nvpn7Z7aLB7WSGFxGGn3dNfV3r10hbW3ta2xQdAAAAAAAAAAAAAAAAAAAAAAAAAMinXTZ56RYrS5aU1dbWnt+2qirEziaAAQ582AFetX2qtl/tOG1t7bLtSVsXXc6nVY/T1tYu2zZFB1N0IFu5D770nlxG7tElyXF/yHAXRW1t7TJt/+Bgig4Y4IBn0ePZZG3td9O+n8Drkxi+H/u8a+pr19SLTl5bW3te2xQdNuwvkgbHOE++OwQAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAACMCAYAAABRYmTcAAACuklEQVR42u3dMW7DMAwFUCrI/a+sLh2KDF2SmDL/e0Bnoa6+SSWuWQV82/79udzDtUfQ5nr6m0dv9ldr8LqdVtzCHLXZd9i6BLZtu7mFsy6XVPDk1m2roCp30tkgaQMkhswZ3PkwYt3O3/WE4wFhFTytcqsoOIMLGgAAeNAFKvrD7SXgcHDIOj9wFnBO3vDbg08CLmA2/OQHkLToQUHbwh11Q22t4Lv5fJJWybrDndiil/8Hz6ziXRWl68bWFSyBdgG1bgAAAAAAAAAAAAAAAAAAAAAAAAAAUN6qCtRFb+b9ag4FHEEbPKlGwOne7BFBq7Mm1dActr8/J4R98tqj13QHMWgwebjhCYMNjziDJw+f28ItaBXyKXrSCNmk0bXpZ/CxneMSMoMGmds5atHx9x9c1ARGwByVBneOAq6iCPfgznF94CJ03uV8paNF5x9Pl+BWFaXrxtYVLIF2AbVuAAAAAAAAAAAAAAAAAAAAQL0zreZyD9ceQSuvbMLAwTLooO725iSvHDLCNnGoBcHTPHfQZM3EdSv9pYvJrZvZayp31NnAJIuKmaDhDB42Pli4bXZBu/m+W8ItZMYHzy0qzuCGK6TPPxu9pnZQ0IQ79Axu+JyqImiV9YSNr3Nm3tTSz+BjO8clZAYNMrdz1KLj7z+4qAmMgDkqDe4cBVxFEe7BneP6wEXovMv5SkeLTvl/8CkVpevG1hUsgXYBtW4AAAAAAAAAAAAAAAAAAABAvTOi+nIP1x5BK69swsDBMuig7vbmJK8cMsI2cagFgW3bbm7hrIvxwSqZdflci26SRcVM0HAGDxsfLNw2u6DdfN8t4RYy44PnFhVncMMV0uefjV5TOyhowh16Bjd8TlURtMp6wsbXOTNvaulncEIfxOh++AW06AAAAAAAAAAAAAAAAAAAAAAAAAAAr34AGBc5K2DI1cQAAAAASUVORK5CYII="},"waking":{"frames":12,"box":[24,4,24,32],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABMbHjfAAAB5klEQVR42u3cMU7DMBQA0B+UO8DIxiE6dEHiCF2ROARn4BBIrD1CpS4MHIKNEU4RNlQhmoYQB9t5bwMFY1n+/j+16wgAAABYiMYQ1O31ftMd/nz1sG1yau+/taZI3RNUgPU7MwVZMhmg8hXa+Pe3JwNU7uph26QoI1K1KwMscIKmyAzHJmeq/1NKuwKgsJSfyupxHxERL3fXkzxXaoknADJboVNP0LlM1f/U4y8AvMQuevwFQGYlxFyZbGh/vj+Xy4vvVOMvADIttUqboKX2v5UiI2ra2kcJlKREqa2EkCGPBMDYFfTt4z0iIm6enpsUK/TQ9iGcBYKFlEDHMsrYFFnbcV9GZIDV4/6rNj5VPw95bu724U8ZYOzqOVTq9unPlodZ7aff9T37er/pasqK9gFM0EX3v63l4zH7AIwKgKnPVuxu193l+UWyDn9vP5edz1MrnDNEeY6/EmiBk0Z2FAAm6Im/mbKtnAOslSLzLlGmnKD6H6fvBSr9KMSxiT00ALwE2wcYtYLubtddyhX6t+1DOAsEAAAAAAAAAAAAAABAbZq579fXvq9cRgnfCCv9flD3m+IrkSAAoOcdwJV9UfRlWMgAIABAAIB9APsAyAAgAEAAQMxwO/Rva2PtIwOAAAABAP/iE7RU52unkeZ5AAAAAElFTkSuQmCC","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABMbHjfAAAAkUlEQVR42u3cQQqAIBAF0DG6/5V1EyjtReS/B62rab6TG6tg6t8V4/HNNWjy8wsA0QTACh1d/1fNWLS0FxYADfpfQXfepwnA+RF580p3e4P21EnjHx2bYAFD/RUIABMAAAAAAAAAAAAAAAAAAAAAAAAAAChHC1KORwcBAAEAAJtgAAAAAAAAAAAAAAAAAAAAjhq4KRwHBpIvogAAAABJRU5ErkJggg=="},"poke-left":{"frames":10,"box":[24,20,27,16],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAgCAYAAABw4baZAAABDklEQVR42u3bwRGCQAwF0F2HXizCQizFGijCAujBRqxG74woomYlvHdV+eNAyOKaWkaup+OtfGDfD/Xdz0RnRuZlzJIzP6crDXz6hf45L2NWtpxIu6kXDudLOZwvLw8w933kE3WNrDlnt8UT1iIvaxbP1V+35Ufr0+jMyLyMWXKWn6MmHWzfD3XJjyFryMuYlS3nL57BFJoshbbyAoPsum8/r7S480RnRnfdbFmtcyKveR0MLBFBgQFz/yo13jOYWrd+c28hOjMyL2OWnNc5OhhYIoICA0bqVmalQAcD82DFeAXoYLCxebAWs2egg4ECAxQY2Acr9sHQwQAFBgoMinmw/LNSoIOBAgMUGDR0B/glUpc7BkxsAAAAAElFTkSuQmCC","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAgCAYAAABw4baZAAAAMklEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJcBbCAAAQ5e1s0AAAAASUVORK5CYII="},"poke-right":{"frames":10,"box":[21,20,27,16],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAgCAYAAABw4baZAAABCUlEQVR42u3bwQ2CQBAF0IHQi0VQiKVYg0VQgD3QiNXonUQFIQPsvnfe5EdgmMXJNvHF83Z9xQqX+6P5tSYjIzOn5Cx5y/O6OLnpBVl6QY+WU3JWDXlT7ZxF/TBGP4ybreP8sp+Js+a1td2wzBtVahbzNVvuP+fsTzMysn5L5nXbI0veel0pb4qsvXXmHr7UrBryiikwheVBP2JhHe4bDIr/BgtzMHMweZvm6WBgiwgKDIg//kWczpY+zRLWzKAyMjJzSs6SNz9PBwNbRFBgQBxsDhY7zTtAB4MaCsyxC9DBwHmw2OncD+hgoMAABQbmYGEOhg4GKDBQYBDOg9Vzrgl0MFBggAKDRG9/9FZS9IHJcwAAAABJRU5ErkJggg==","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAgCAYAAABw4baZAAAAMklEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJcBbCAAAQ5e1s0AAAAASUVORK5CYII="},"tickle":{"frames":16,"box":[23,18,26,18],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAkCAYAAAD4p7R7AAAB0ElEQVR42u2bMU7DMBSGfyPfAUa2LtyAoQsSCztrJQ7BGXoIJBaGHqESCwOHYOvYniJMQVYVp7Zjhxfp+6a0dfJi/7H9aud3asB+s+5ur2/+Pq+2O/fz+tyFZVbbndNCGLv38LfD6ajH9y/z9UKfelwJAIrxKT06lcPpWDxq5MbIGUn2m3UnSeGo23J0nxIrZeRHHzv6+CmNZS0NiU3bS2IoHUEfu/r4WMH7t09J0vfLw+gFx8qFjdYfhzdQI0YuU2IOzQ5D9ZqjfuhjQx8fO6EvHB5fKvfxdJfVUK1j1IpZ8mC0jIU+dvRxNVO4nPy3Rh6fmyK0/F/SKp+vmcKhT319/KVpzjq50/YS64U+duvll1qxlFG0r08/6iz1gUMfu/qwDwQgNlIB6EAAdCAAOhAAqPRdOEVWfc5XIM6/L1lNmSNGaawpq11zxEKf/9eHGQiAFA7AUAqX+mpETdNV6rVKDFGp57QwkbVoS/Sxo4/D8SgcqehDCgeAIxXHI45UHKk4HnGk4kjF8YgjFX1wpOJIRR8cqThS0QdHqnA84kjFkSocjzhS0UfsAwGIjVQAOhAAHQiADgQAwpGKIxV9cKQCkMIB4EjF8YgjFX0i5X4BUl3ASmlIMWIAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAkCAYAAAD4p7R7AAAANElEQVR42u3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgN1JAABgIwlBQAAAABJRU5ErkJggg=="},"drag":{"frames":8,"box":[23,12,26,22],"url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAWCAYAAACxFRLdAAAA2klEQVR42u3c2w2CQBAF0MHYi0VQCKVQg0VYgD3QCNXgrzE+VpHdZXPOJwEmN2GyAwS6iIh5HJa4czpfu1jh1fly1Wktkyz1XmuHAH6mgUADQRnHd3PjWo9zZ646rWWSpd5r7Zhyw7SVXHVayyRLPXXejnD9ZYr+Mn08Sep+peu0lkmW8nXcA4GHCFBGt8W8mPrSKled1jLJUk8WKxAY4UADgQYCDQRoINBAsCfzOCyPz8yfbft231J1WsskS11ZrEBghAMNBLHLD+rijz9fSD0+V53WMslSV5Yb/YiR3qNBrscAAAAASUVORK5CYII=","ink":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAWCAYAAACxFRLdAAAAKElEQVR42u3BMQEAAADCoPVP7WENoAAAAAAAAAAAAAAAAAAAAAAAgBtHlgABq98cRwAAAABJRU5ErkJggg=="}};
  const FRAME_MS = 80;
  const COLS = 8;

  // Clean up any stale nodes from previous runs
  document.querySelectorAll(".ag-claude-crab, .ag-claude-turn-rail, .ag-claude-turn-nav").forEach((el) => el.remove());

  let disposed = false;
  const cleanups = [];
  ctx.onCleanup(() => {
    disposed = true;
    for (const fn of cleanups) {
      try { fn(); } catch (e) {}
    }
    document.querySelectorAll(".ag-claude-crab, .ag-claude-turn-rail, .ag-claude-turn-nav").forEach((el) => el.remove());
  });

  // ==========================================================================
  // 1. Clawd Pixel Crab Mascot
  // ==========================================================================
  const crabEl = document.createElement("div");
  crabEl.className = "ag-claude-crab";
  const spriteEl = document.createElement("div");
  spriteEl.className = "ag-claude-crab-sprite";
  const stripEl = document.createElement("span");
  stripEl.className = "ag-claude-crab-strip";
  const hitEl = document.createElement("div");
  hitEl.className = "ag-claude-crab-hit";
  hitEl.title = "Clawd";
  spriteEl.appendChild(stripEl);
  crabEl.appendChild(spriteEl);
  crabEl.appendChild(hitEl);

  let currentAnim = "idle";
  let waapiAnim = null;
  let oneshotUntil = 0;
  let oneshotAnim = "";
  let wasRunning = false;
  let lastActivityMs = Date.now();
  let lastClickIdx = 0;
  let nextIdleExtraAt = Date.now() + 5000;
  let extraIdx = 0;

  function applySheet(name, once) {
    const def = CRAB_SHEETS[name] || CRAB_SHEETS.idle;
    const [bx, by, bw, bh] = def.box;
    const rows = Math.ceil(def.frames / COLS);
    crabEl.style.setProperty("--ag-crab-x", String(bx));
    crabEl.style.setProperty("--ag-crab-y", String(by));
    crabEl.style.setProperty("--ag-crab-w", String(bw));
    crabEl.style.setProperty("--ag-crab-h", String(bh));
    crabEl.style.setProperty("--ag-crab-strip-h", String(rows * bh));
    crabEl.style.setProperty("--ag-crab-sheet", "url(\"" + def.url + "\")");
    crabEl.style.setProperty("--ag-crab-ink", def.ink ? "url(\"" + def.ink + "\")" : "none");
    crabEl.setAttribute("data-ready", "true");

    if (waapiAnim) {
      try { waapiAnim.cancel(); } catch (e) {}
      waapiAnim = null;
    }
    const keyframes = [];
    for (let f = 0; f < def.frames; f++) {
      const col = f % COLS;
      const row = Math.floor(f / COLS);
      keyframes.push({
        transform: "translate3d(" + (-col * bw * 2) + "px," + (-row * bh * 2) + "px,0)",
        offset: f / def.frames,
        easing: "steps(1)"
      });
    }
    const endCol = once ? (def.frames - 1) % COLS : 0;
    const endRow = once ? Math.floor((def.frames - 1) / COLS) : 0;
    keyframes.push({
      transform: "translate3d(" + (-endCol * bw * 2) + "px," + (-endRow * bh * 2) + "px,0)",
      offset: 1
    });
    waapiAnim = stripEl.animate(keyframes, {
      duration: def.frames * FRAME_MS,
      iterations: once ? 1 : Infinity,
      fill: "forwards"
    });
    return def;
  }

  function setAnim(name, durationMs) {
    const once = Boolean(durationMs);
    if (durationMs) {
      oneshotAnim = name;
      oneshotUntil = Date.now() + durationMs;
    }
    if (currentAnim !== name) {
      currentAnim = name;
      applySheet(name, once);
    }
  }

  applySheet("idle", false);
  cleanups.push(() => {
    if (waapiAnim) {
      try { waapiAnim.cancel(); } catch (e) {}
      waapiAnim = null;
    }
  });

  let pressState = null;
  let clickTimes = [];
  let isDragging = false;

  hitEl.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    lastActivityMs = Date.now();
    nextIdleExtraAt = lastActivityMs + 6000;
    pressState = { id: e.pointerId, x: e.clientX, y: e.clientY, lifted: false };
    try { hitEl.setPointerCapture(e.pointerId); } catch (err) {}
  });

  hitEl.addEventListener("pointermove", (e) => {
    if (!pressState || pressState.lifted || e.pointerId !== pressState.id) return;
    if (Math.hypot(e.clientX - pressState.x, e.clientY - pressState.y) < 4) return;
    pressState.lifted = true;
    clickTimes = [];
    isDragging = true;
    oneshotAnim = "";
    oneshotUntil = 0;
    setAnim("drag");
  });

  function clearPress(e) {
    if (!pressState || e.pointerId !== pressState.id) return null;
    const lifted = pressState.lifted;
    pressState = null;
    if (lifted) {
      isDragging = false;
      setAnim(detectDesiredAnim());
    }
    return lifted;
  }

  hitEl.addEventListener("pointerup", (e) => {
    const lifted = clearPress(e);
    if (lifted !== false) return;
    const now = Date.now();
    lastActivityMs = now;
    nextIdleExtraAt = now + 6000;
    if (currentAnim === "sleeping") {
      setAnim("waking", CRAB_SHEETS.waking.frames * FRAME_MS);
      return;
    }
    if (clickTimes.length > 0 && now - clickTimes[clickTimes.length - 1] > 450) {
      clickTimes = [];
    }
    clickTimes.push(now);
    if (clickTimes.length >= 4) {
      clickTimes = [];
      setAnim("tickle", CRAB_SHEETS.tickle.frames * FRAME_MS);
      return;
    }
    const rect = hitEl.getBoundingClientRect();
    const pick = (e.clientX - rect.left) < rect.width / 2 ? "poke-left" : "poke-right";
    setAnim(pick, CRAB_SHEETS[pick].frames * FRAME_MS);
  });

  hitEl.addEventListener("pointercancel", clearPress);
  hitEl.addEventListener("click", (e) => e.stopPropagation());

  function onUserActivity() {
    const now = Date.now();
    lastActivityMs = now;
    if (currentAnim === "sleeping") {
      nextIdleExtraAt = now + 6000;
      setAnim("waking", CRAB_SHEETS.waking.frames * FRAME_MS);
    }
  }
  window.addEventListener("keydown", onUserActivity, { passive: true });
  window.addEventListener("pointerdown", onUserActivity, { passive: true });
  cleanups.push(() => {
    window.removeEventListener("keydown", onUserActivity);
    window.removeEventListener("pointerdown", onUserActivity);
  });

  function findMainInputBox() {
    const boxes = document.querySelectorAll("[id=\"antigravity.agentSidePanelInputBox\"]");
    for (const box of boxes) {
      if (box.closest && box.closest("[data-testid=\"side-question-tab-content\"], [data-testid=\"side-question-tab-composer\"]")) {
        continue;
      }
      return box;
    }
    return null;
  }

  let runStartMs = 0;
  let lastNotifyChimeMs = 0;

  function playClaudeChime(kind) {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ac = new Ctx();
      const now = ac.currentTime;
      const notes = kind === "done" ? [523.25, 783.99] : [659.25, 659.25];
      notes.forEach((freq, idx) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.11);
        gain.gain.setValueAtTime(0.0001, now + idx * 0.11);
        gain.gain.exponentialRampToValueAtTime(0.045, now + idx * 0.11 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.11 + 0.22);
        osc.connect(gain);
        gain.connect(ac.destination);
        osc.start(now + idx * 0.11);
        osc.stop(now + idx * 0.11 + 0.24);
      });
      setTimeout(() => { try { ac.close(); } catch (e) {} }, 700);
    } catch (e) {}
  }

  function readLiveHostState(box) {
    const snap = window.__ag_pane_states && window.__ag_pane_states.main && window.__ag_pane_states.main.lastSnap;
    const pill = document.getElementById("ag-live-metrics-pill");
    const dot = pill ? pill.querySelector(".ag-ctx-pending-dot") : null;
    const visual = (snap && snap.visualState) ||
      (dot && dot.classList.contains("ag-dot-error") ? "error" :
       dot && dot.classList.contains("ag-dot-slow") ? "slow" :
       dot && dot.classList.contains("ag-dot-running") ? "running" : "idle");
    const hasCancel = Boolean(
      box &&
      box.querySelector("[data-testid=\"input-cancel-button\"], [data-tooltip-id=\"input-send-button-cancel-tooltip\"], [aria-label^=\"Cancel (\"], [aria-label^=\"取消生成\"]")
    );
    const isRunning = Boolean((snap && snap.isExecuting) || visual === "running" || hasCancel);
    const isThinking = Boolean(document.querySelector("[data-testid=\"agent-loading\"]"));
    return { visual, isRunning, isThinking };
  }

  function detectDesiredAnim() {
    if (isDragging) return "drag";
    const now = Date.now();
    if (oneshotAnim && now < oneshotUntil) return oneshotAnim;
    oneshotAnim = "";

    const box = findMainInputBox();
    const { visual, isRunning, isThinking } = readLiveHostState(box);

    if (isRunning) {
      lastActivityMs = now;
      nextIdleExtraAt = now + 5000;
      if (!wasRunning) runStartMs = now;
      wasRunning = true;
      if (visual === "slow") {
        if (now - lastNotifyChimeMs > 15000) {
          lastNotifyChimeMs = now;
          playClaudeChime("notify");
        }
        return "notification";
      }
      if (isThinking) return "thinking";
      return now - runStartMs < 1500 ? "thinking" : "typing";
    }

    if (wasRunning) {
      const ranFor = now - runStartMs;
      wasRunning = false;
      runStartMs = 0;
      lastActivityMs = now;
      nextIdleExtraAt = now + 6000;
      if (visual === "error") {
        setAnim("error", CRAB_SHEETS.error.frames * FRAME_MS * 2);
        return "error";
      }
      if (ranFor >= 3000) playClaudeChime("done");
      setAnim("happy", CRAB_SHEETS.happy.frames * FRAME_MS);
      return "happy";
    }

    if (visual === "error") return "error";
    if (visual === "slow") return "notification";
    if (now - lastActivityMs > 90000) return "sleeping";

    if (now >= nextIdleExtraAt) {
      const extras = ["idle-look", "idle-wave", "idle-laptop"];
      const pick = extras[extraIdx++ % extras.length];
      nextIdleExtraAt = now + CRAB_SHEETS[pick].frames * FRAME_MS + 4500;
      setAnim(pick, CRAB_SHEETS[pick].frames * FRAME_MS);
      return pick;
    }
    return "idle";
  }

  const stateTimer = setInterval(() => {
    if (disposed) return;
    const box = findMainInputBox();
    let reattached = false;
    if (box && crabEl.parentElement !== box) {
      box.appendChild(crabEl);
      reattached = true;
    }
    if (!crabEl.isConnected) return;

    const desired = detectDesiredAnim();
    if (desired !== currentAnim) {
      setAnim(desired);
    } else if (reattached || (!oneshotAnim && (!waapiAnim || waapiAnim.playState !== "running"))) {
      applySheet(currentAnim, Boolean(oneshotAnim));
    }
  }, 320);
  cleanups.push(() => clearInterval(stateTimer));

  // ==========================================================================
  // 2. Right-Side Conversation Turn Navigator
  // ==========================================================================
  const railEl = document.createElement("div");
  railEl.className = "ag-claude-turn-rail";
  const trackEl = document.createElement("div");
  trackEl.className = "ag-claude-turn-rail-track";
  railEl.appendChild(trackEl);

  const navEl = document.createElement("div");
  navEl.className = "ag-claude-turn-nav";
  const navListEl = document.createElement("div");
  navListEl.className = "ag-claude-turn-nav-list";
  navEl.appendChild(navListEl);

  document.body.appendChild(railEl);
  document.body.appendChild(navEl);

  let closeTimer = 0;
  let lastListSig = "";
  let lastCurrentIdx = -1;
  let markEls = [];
  let rowEls = [];

  function openNav() {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = 0;
    }
    railEl.setAttribute("data-open", "true");
    navEl.setAttribute("data-open", "true");
  }

  function scheduleCloseNav() {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      railEl.removeAttribute("data-open");
      navEl.removeAttribute("data-open");
    }, 150);
  }

  railEl.addEventListener("mouseenter", openNav);
  railEl.addEventListener("mouseleave", scheduleCloseNav);
  navEl.addEventListener("mouseenter", openNav);
  navEl.addEventListener("mouseleave", scheduleCloseNav);
  cleanups.push(() => {
    if (closeTimer) clearTimeout(closeTimer);
  });

  function getMainTurns() {
    const all = document.querySelectorAll("[data-testid=\"user-message-content\"]");
    const turns = [];
    for (const el of all) {
      if (el.closest && el.closest("[data-testid=\"side-question-tab-content\"]")) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) continue;
      turns.push({ el, text });
    }
    return turns;
  }

  function updateTurnNav() {
    if (disposed) return;
    const turns = getMainTurns();
    if (turns.length < 2) {
      railEl.style.display = "none";
      navEl.removeAttribute("data-open");
      lastListSig = "";
      lastCurrentIdx = -1;
      return;
    }

    // Position rail on the right edge of the main conversation container
    const anchor = turns[0].el.closest("[data-testid=\"conversation-view\"]") || turns[0].el.parentElement;
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      if (rect.width < 460) {
        railEl.style.display = "none";
        navEl.removeAttribute("data-open");
        return;
      }
      const rightPx = Math.max(8, window.innerWidth - rect.right + 10);
      railEl.style.right = rightPx + "px";
      navEl.style.right = (rightPx + 2) + "px";
    }
    railEl.style.display = "block";

    // Find current turn closest to viewport top
    const midY = window.innerHeight * 0.35;
    let currentIdx = 0;
    for (let i = 0; i < turns.length; i++) {
      const r = turns[i].el.getBoundingClientRect();
      if (r.top <= midY) currentIdx = i;
    }

    const listSig = turns.map((t) => t.text.slice(0, 24)).join("|");
    const listChanged = listSig !== lastListSig;
    if (!listChanged && currentIdx === lastCurrentIdx) return;

    const pitch = 24;
    const totalH = turns.length * pitch;
    const maxVisible = 10;
    const railH = Math.min(turns.length, maxVisible) * pitch;
    railEl.style.height = railH + "px";
    trackEl.style.height = totalH + "px";

    let offset = 0;
    if (turns.length > maxVisible) {
      const ideal = currentIdx * pitch - railH / 2 + pitch / 2;
      offset = Math.max(0, Math.min(totalH - railH, ideal));
    }
    trackEl.style.transform = "translateY(" + (-offset) + "px)";
    railEl.setAttribute("data-fade-top", offset > 4 ? "true" : "false");
    railEl.setAttribute("data-fade-bottom", offset < totalH - railH - 4 ? "true" : "false");

    if (listChanged) {
      lastListSig = listSig;
      trackEl.innerHTML = "";
      navListEl.innerHTML = "";
      markEls = [];
      rowEls = [];

      turns.forEach((turn, idx) => {
        const mark = document.createElement("div");
        mark.className = "ag-claude-turn-rail-mark";
        mark.style.top = (idx * pitch) + "px";
        trackEl.appendChild(mark);
        markEls.push(mark);

        const row = document.createElement("button");
        row.type = "button";
        row.className = "ag-claude-turn-nav-row";

        const dash = document.createElement("span");
        dash.className = "ag-claude-turn-nav-dash";
        const label = document.createElement("span");
        label.className = "ag-claude-turn-nav-label";
        label.textContent = (idx + 1) + ". " + turn.text.slice(0, 48);

        row.appendChild(dash);
        row.appendChild(label);
        row.addEventListener("click", () => {
          turn.el.scrollIntoView({ behavior: "smooth", block: "start" });
          scheduleCloseNav();
        });
        navListEl.appendChild(row);
        rowEls.push(row);
      });
    }

    lastCurrentIdx = currentIdx;
    for (let i = 0; i < markEls.length; i++) {
      if (i === currentIdx) {
        markEls[i].setAttribute("data-current", "true");
        rowEls[i].setAttribute("data-current", "true");
      } else {
        markEls[i].removeAttribute("data-current");
        rowEls[i].removeAttribute("data-current");
      }
    }
  }

  const navTimer = setInterval(updateTurnNav, 500);
  window.addEventListener("scroll", updateTurnNav, true);
  window.addEventListener("resize", updateTurnNav);
  cleanups.push(() => {
    clearInterval(navTimer);
    window.removeEventListener("scroll", updateTurnNav, true);
    window.removeEventListener("resize", updateTurnNav);
  });
  updateTurnNav();
})();
