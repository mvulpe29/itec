package itec.treetable.service.impl;

import itec.treetable.service.VoteService;
import itec.treetable.domain.Vote;
import itec.treetable.repository.VoteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Vote.
 */
@Service
@Transactional
public class VoteServiceImpl implements VoteService{

    private final Logger log = LoggerFactory.getLogger(VoteServiceImpl.class);

    private final VoteRepository voteRepository;

    public VoteServiceImpl(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    /**
     * Save a vote.
     *
     * @param vote the entity to save
     * @return the persisted entity
     */
    @Override
    public Vote save(Vote vote) {
        log.debug("Request to save Vote : {}", vote);
        return voteRepository.save(vote);
    }

    /**
     * Get all the votes.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Vote> findAll() {
        log.debug("Request to get all Votes");
        return voteRepository.findAll();
    }

    /**
     * Get one vote by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Vote findOne(Long id) {
        log.debug("Request to get Vote : {}", id);
        return voteRepository.findOne(id);
    }

    /**
     * Delete the vote by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Vote : {}", id);
        voteRepository.delete(id);
    }
}
