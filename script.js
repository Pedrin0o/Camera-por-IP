// Inicia a conexão com o servidor público do PeerJS
const peer = new Peer(); 

const videoRemoto = document.getElementById('video-remoto');
const spanMeuId = document.getElementById('meu-id');

// 1. Assim que conectar, ele gera o "ID" deste PC
peer.on('open', (id) => {
    spanMeuId.textContent = id;
    console.log("Meu ID para receber vídeo é:", id);
});

// 2. O PC FICA ESPERANDO UMA LIGAÇÃO (Do iPhone)
peer.on('call', (call) => {
    
    // O PC atende a ligação, mas NÃO envia nenhum vídeo de volta
    call.answer(); 

    // 3. Quando o vídeo do iPhone chegar, joga ele na tela
    call.on('stream', (streamDoIphone) => {
        videoRemoto.srcObject = streamDoIphone;
        console.log("Vídeo do iPhone recebido com sucesso!");
    });
});