#Javascript game#

##story##
you are a character from THHGTTH and you have to get off the planet /ship

  A) before it is destroyed (Authur, Ford)
  B) before you are arrested (Zaphod, trillian)
  C) before you are kidnapped (Marvin)

Every character has a range of stats:

  1. stamina
  2. health
  3. charm
  4. intellect

Every character has a unique set of obstacles, so obstacles overlap

  ### Authur & ford ###
    * they both have to stop Authur's house from getting destroyed
    * Authur must convince the foreman not to destroy his house
    * they both have to make it in and out of the pub
    ford must convince ford to go to the pub
    * Authur has to find a babel fish
    * Ford has to convience Authur and the Bartender that the earth is going to be destroyed
    * Ford has to find 2 towels

  #### Zaphod & Trillian ###

    * both must hijack the Heart Of Gold
    * Trillian must reason with the computer
    * Zaphod must silence the computer
    * Zaphod must convince Trillian to steal the ship
    * Zaphod must choose a destination
    * Trillian must conience zaphod to use the inprobabblity drive
    * Trillian must search the ship for her pet mice

  ### Marvin ###

    * get off the Heart of Gold
    * convience the cmputer that it is being stolen

  ## Misc ##
    * character have bags and a random assortment of items to help them complete there task
    * every game has a time limit of 1 imaginary hour

    # classes #
    ###character class###
      ####attributes:####
        * name:
        * bag:
        * stats:
        * tasklist:
      #####messages:####
        * put_item(item)
        * use_item
        * try_task(task)
        * change_stat(statToChange)
        * winner?
    ###bag class###
      #####attributes:#####
        * maxItemLimit
        * itemCount
        * items
      #####messages:#####
        * itemsList
        * hasItem?
    ###task class###
      ####attributes:#####
        * Prompt
        * minPasslimit
        * cost
      ####messages:#####
        * prompt?
        * cost?
    ###Stat class###
      ####attributes:####
        * name
        * value
    ###Game class###
