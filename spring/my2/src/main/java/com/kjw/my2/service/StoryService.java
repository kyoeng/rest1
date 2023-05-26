package com.kjw.my2.service;


import com.kjw.my2.domain.StoryDTO;
import com.kjw.my2.domain.StoryImgsVO;
import com.kjw.my2.domain.StorysVO;
import com.kjw.my2.domain.forPaging.SearchCri;

import java.util.List;

public interface StoryService {

    // 스토리 가져오기
    List<StoryDTO> getStorys(SearchCri cri);

    // 해당 아이디의 스토리 가져오기
    List<StoryDTO> getMyStorys(SearchCri cri);

    // 스토리 전체 데이터 갯수
    int totalStory(SearchCri cri);

    // 해당 아이디의 스토리 전체 데이터 갯수
    int totalMyStory(SearchCri cri);

    // 스토리 등록
    int regStory(StorysVO vo);

    // 등록 직후 seq 조회
    int selectSeq(StorysVO vo);

}
