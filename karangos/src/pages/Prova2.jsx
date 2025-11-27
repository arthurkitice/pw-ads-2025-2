import * as React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Prova2(){
    const [likes, setLikes] = React.useState (() => window.localStorage.getItem('likes') ?? 0)

    React.useEffect(() => {window.localStorage.setItem('likes', likes)}, [likes])

    return <>
        <Typography variant="h1" gutterBottom>
            Sobre o autor
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 375 }}
                image="/src/assets/foto-do-autor.png"
                title="Arthur Kitice Barreto Ferreira da Cunha"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Arthur K. B. F. da Cunha
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Cursando Análise e Desenvolvimento de Sistemas na faculdade
                    Fatec Franca "Dr. Thomaz Novelino" desde 2024, com previsão
                    para se formar no final de 2026. Apaixonado por programação, 
                    matemática e lógica. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setLikes(Number(likes)+1)} sx={{backgroundColor: 'secondary.main', color: 'white'}}>
                    ❤ CURTIR ({likes})
                </Button>   
            </CardActions>
        </Card>
    </>

}



