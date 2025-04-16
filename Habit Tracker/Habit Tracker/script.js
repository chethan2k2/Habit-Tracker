body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  
  .app {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input {
    flex: 1;
    padding: 10px;
  }
  
  button {
    padding: 10px 15px;
    cursor: pointer;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  li.completed span {
    text-decoration: line-through;
    color: gray;
  }  