// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Web3fy is ERC721,Ownable{

    uint public maxSupply;
    uint public totalSupply;
    struct Domain{
        string name; uint256 cost; bool isOwned;
    }
    mapping (uint256=>Domain) public domains;

    constructor()ERC721("Web3fy", "FY"){
    }

    function list(string memory _name,uint256 _cost)public onlyOwner{
         maxSupply+=1;
         domains[maxSupply]=Domain(_name,_cost,false);
         //domains[maxSupply]=Domain({name:_name,cost:_cost,isOwned:false});
         //Domain storage item=domains[maxSupply];
         //item.name=_name;
         
    }

    function getDomain(uint256 _id)public view returns(Domain memory){
        return domains[_id];
    }

    function mint(uint256 _id)public payable{
        require(domains[_id].isOwned==false);
        require(msg.value>=domains[_id].cost);
        domains[_id].isOwned=true;
        totalSupply++;
        _mint(msg.sender,_id);
    }

    function withdraw()public onlyOwner returns(bool){
        payable(msg.sender).transfer(address(this).balance);
        return(true);
    }
    
    function getBalance()public view returns(uint256){
        return(address(this).balance);
    }



}