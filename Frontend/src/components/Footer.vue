<template>
    <div class='main-div-footer'>
        <div class='social-icons-div'>
            <a href='#' class='fa fa-facebook'></a>
            <a href='#' class='fa fa-twitter'></a>
            <a href='#' class='fa fa-linkedin'></a>
            <a href='#' class='fa fa-instagram'></a>
        </div>
        <figure>
            <img
                alt='Skylord Movie Club Logo'
                src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
            />
        </figure>
        <div class='menu-div'>
            <ul>
                <li
                    v-for='(link, index) in navLinks'
                    :key='index'
                >
                    <router-link
                        :to='link.path'
                    >
                        {{ link.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navLinks: Array
    }
}
</script>

<style scoped lang='scss'>
div.main-div-footer {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    padding: 1rem 5rem;
    width: 100%;

    .social-icons-div {
        display: flex;
        justify-content: space-evenly;
        width: 33.33%;

        .fa {
            padding: 15px;
            width: 50px;
            font-size: 20px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            border-radius: 50%;
        }

        .fa:hover {
            opacity: 0.7;
        }

        .fa-facebook {
            background: #3B5998;
            color: white;
        }

        .fa-twitter {
            background: #55ACEE;
            color: white;
        }

        .fa-linkedin {
            background: #007bb5;
            color: white;
        }

        .fa-instagram {
            background: #125688;
            color: white;
        }
    }

    figure {
        width: 33.33%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 30%;
            height: auto;
        }
    }

    .menu-div {
        height: 100%;
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;

            li {
                list-style-type: none;
                width: 100%;
                display: flex;
                justify-content: center;

                a {
                    color: $primaryOrange;
                    text-decoration: none;
                    width: 80%;
                    text-align: center;
                }

                a:hover {
                    background-color: #F67743;
                    color: #fff;
                }
            }
        }
    }
}
</style>