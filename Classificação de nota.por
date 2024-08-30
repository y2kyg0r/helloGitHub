programa {
  funcao inicio() {
    real nota
    escreva("Digite sua nota de 0 a 100\n")
    leia(nota)
    se (nota >= 85 e nota <= 100)
    escreva(" Parabéns, sua nota é A: "+nota)
    senao se(nota <= 84  e nota >= 61)
      escreva ("Sua nota é B: "+nota)
      senao se(nota <= 60 e nota >= 31)
      escreva("Sua nota é C: "+nota)
      senao se(nota <= 30 e nota>= 16)
      escreva("Sua nota é D: "+nota)
      senao se(nota <= 15)
      escreva("Parabéns, você é um fracassado, e sua nota é E: "+nota)
      senao se(nota >= 101)
      escreva("DIGITE SUA NOTA DE 0 A 100")
    }
  }
}
