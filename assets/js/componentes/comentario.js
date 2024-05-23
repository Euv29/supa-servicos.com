class Comentario extends HTMLElement{
  constructor(){
    super();

    this.build();
  }

  build(){
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());

    const cCard = this.criarCard();
    const cabecalho = this.criarCabecalho();
    const containerEstrela = document.createElement('section');
    const estrelas = this.criarEstrelas();
    const corpo = this.criarCorpo();
    
    containerEstrela.classList.add('comment-star');  

    estrelas.forEach(estrela => containerEstrela.appendChild(estrela));
    
    cCard.appendChild(cabecalho);
    cCard.appendChild(corpo);
    cCard.appendChild(containerEstrela);

    shadow.appendChild(cCard);
  }

  criarCard(){
    const comentario = document.createElement('section');
    comentario.classList.add('comentario-card');

    return comentario;
  }

  criarCabecalho(){
    const cabecalho = document.createElement('section');
    cabecalho.classList.add('card-head');

    const imgContainer = document.createElement('section');
    const img = document.createElement('img');
    
    img.setAttribute('src', 'assets/img/icons/Ellipse 5.svg');
    imgContainer.appendChild(img)

    const nome = document.createElement('h2');
    nome.classList.add('nomeComentario');
    nome.innerHTML = 'Hélcio';

    cabecalho.appendChild(imgContainer);
    cabecalho.appendChild(nome)

    return cabecalho;
  }

  criarCorpo(){
    const corpo = document.createElement('section');
    const conteudo = document.createElement('p');

    conteudo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis, turpis non sagittis s';
    
    corpo.appendChild(conteudo);

    return corpo;
  }

  criarEstrelas(){
    const criarEstrelas = (_, id) => {
      
      const estrela = document.createElement('span');
      
      estrela.classList.add('estrela');
      estrela.setAttribute('data-value', Number(id) + 1);
      estrela.innerHTML = '&#9733;';
      
      return estrela;
    }

    return Array.from({ length: 5 }, criarEstrelas);
  }

  styles(){
    const style = document.createElement('style');
    style.textContent =`
      .comentario-card{
         white-space: wrap;
         border: 1px solid #ECECEC;
         justify-content: space-between;
         min-width: 300px;
         width: 300px;
         min-height: 100px;
         border-radius: 1rem;
         padding: 1rem;
         margin-right: 0.5rem;

         display: flex;
         flex-direction: column;
      }

      .comment-star{
        margin-left: 80%;
      }

      .card-head{
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }  

      .nomeComentario{
        margin-left: 0.5rem;
      }
    `
    return style;
  }
}

customElements.define('comentario-comp', Comentario);