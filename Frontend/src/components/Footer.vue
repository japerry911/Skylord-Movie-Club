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
            <h1>Menu</h1>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
div.main-div-footer {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 2rem 5rem;

    .social-icons-div {
        display: flex;
        justify-content: space-evenly;

        .fa {
            padding: 15px;
            width: 50px;
            font-size: 20px;
            text-decoration: none;
            margin: 0 5px;
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
        width: 10%;
        height: auto;

        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>