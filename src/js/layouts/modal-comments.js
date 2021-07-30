import modal from "../../images/modalPurple.svg";

const modalCommentsLayout = `<section id="modal-comments" class="l-modal">
        <img class="l-modal-background" src="${modal}" alt="main-image" />
        <h3 class="l-modal-title">Comments</h3>
        <section class="modal-list">
          <div class="modal-list-item  list-item-comment">
            <h5>Ryan W.</h5>
            
            <h5 class="comment-text">Wow! I ordered it and was delicious</h5>           
          </div>
          <div class="modal-list-item list-item-comment">
            <h5>Ryan W.</h5>
            
            <h5 class="comment-text">Wow! I ordered it and was delicious</h5>           
          </div>
                    <div class="modal-list-item list-item-comment">
            <h5>Ryan W.</h5>
            
            <h5 class="comment-text">Wow! I ordered it and was delicious</h5>           
          </div>
        </section>        
        <section class="buttons">
          <button id="btn-new" class="btn-1 green-background">New Comment</button>
          <button id="btn-comment-cancel" class="btn-1 cancel">Cancel</button>
        </section>
      </section>

`;

export default modalCommentsLayout;
