class Inview {
  constructor () {
    
  }

  start (nodes) {
    window.addEventListener('scroll', function(e){
      const posY = window.scrollY;
      nodes.forEach(element => {
        
        const node = document.querySelector(element.node);
        //const node_pos_y = node.offsetTop;
        const node_pos_y = node.getBoundingClientRect().top + posY;
        if ( posY >= node_pos_y + element.pos ) {
          node.setAttribute('data-inview', true);
        }
      });
    })
  }
}


export default Inview;