/**
 * $lambda
 * 
 * Uma expressão de função de seta (também conhecida como Arrow Function) tem uma sintaxe mais
 * curta em comparação com expressões de função e lexically se liga a este valor
 * 
 * @module $lambda
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $lambda('(a, b) => a + b');
 * 
 */
Ninja.module('$lambda', [

  '$apply',
  '$concat',
  '$format',
  '$match',
  '$split',
  '$_'

], function ($apply, $concat, $format, $match, $split, $_) {
  
  /**
   * Expressao que separa os parametros e o corpo
   * da funcao
   */
  var arrow = $match($_, /^\((.*)\)\s*=>\s*(.*)$/);
  
  /**
   * Uma expressão de função de seta (também conhecida como Arrow Function) tem uma sintaxe mais
   * curta em comparação com expressões de função e lexically se liga a este valor
   * 
   * @public
   * @method $lambda
   * @param {String} a Expressao da funcao
   * @return {Functon} Funcao montada
   * @example
   * 
   *        $lambda('(a, b) => a + b');
   *
   */
  function lambda(a) {
    return $apply(Function, $concat($split(arrow(a)[1], ','), [$format('return {0}', [arrow(a)[2]])]));
  };
  
  /**
   * Revelacao do servico $lambda, encapsulando a visibilidade das funcoes
   * privadas
   */
  return lambda;

});
